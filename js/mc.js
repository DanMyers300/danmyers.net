// Control the minecraft.danmyers.net server
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('serverToggle');
  const statusText = document.getElementById('statusText');

  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod/mc_start_stop';

  const updateStatusText = (text) => {
    let message;
    try {
      const json = JSON.parse(text);
      message = json.message;
    } catch (error) {
      // If the provided text is not valid JSON, set the entire text as the message
      message = text;
    }
    statusText.textContent = message;
  };

  const getStatusFromServer = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        console.log('Response Data:', data); // Add this line to see the response data
        const body = JSON.parse(data.body); // Parse the "body" property as JSON
        updateStatusText(body.message); // Update status text with the "message" part of the JSON
      } else {
        updateStatusText('Error communicating with server');
      }
    } catch (error) {
      console.error('Error fetching server status:', error);
      updateStatusText('Currently not working');
    }
  };

  getStatusFromServer();

  toggleButton.addEventListener('change', async () => {
    const action = toggleButton.checked ? 'start' : 'stop';
    updateStatusText('Loading');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ action: action }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        const body = JSON.parse(data.body); // Parse the "body" property as JSON
        updateStatusText(body.message); // Update status text with the "message" part of the JSON
      } else {
        updateStatusText('Error communicating with server');
      }
    } catch (error) {
      console.error('Error toggling EC2 instance:', error);
      updateStatusText('Currently not working');
    }
  });
});
