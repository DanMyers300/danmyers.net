document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const statusText = document.getElementById('statusText');

  let action = 'start';
  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod';

  const updateStatusText = (text) => {
    statusText.textContent = text;
  };

  toggleButton.addEventListener('click', async () => {
    if (action === 'start') {
      action = 'stop';
    } else {
      action = 'start';
    }

    updateStatusText('Loading');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ action: action }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      if (data && data.status === 'started') {
        updateStatusText('Server started');
      } else if (data && data.status === 'stopped') {
        updateStatusText('Server stopped');
      } else {
        updateStatusText('Unknown status');
      }
    } catch (error) {
      console.error('Error toggling EC2 instance:', error);
      updateStatusText('Currently not working');
    }
  });

  const serverUrlElement = document.getElementById('serverUrl');

  serverUrlElement.addEventListener('click', copyToClipboard);

  function copyToClipboard() {
    const serverUrl = serverUrlElement.innerText;
    navigator.clipboard.writeText(serverUrl)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  }
});
