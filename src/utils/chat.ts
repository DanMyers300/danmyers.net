export async function streamChat(
  prompt: string,
  onToken: (token: string) => void,
) {
  const url = import.meta.env.VITE_URL;

  if (!url) {
    throw new Error("URL is not defined in the environment.");
  }

  const headers = { "Content-Type": "application/json" };
  const request = { question: prompt };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.body) {
      throw new Error("No Response Body");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    try {
      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        onToken(chunk);
      }
    } finally {
      reader.releaseLock(); // Release the lock when done or on error
    }
  } catch (error) {
    console.error("An error occurred during streaming:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

