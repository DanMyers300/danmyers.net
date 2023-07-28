document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const statusText = document.getElementById('statusText');

  let action = 'start';
  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod/mc_start_stop';

  const updateStatusText = (text) => {
    statusText.textContent = text;
  };

  const handleServerResponse = (data) => {
    if (data && data.status === 'start') {
      updateStatusText('Server started');
    } else if (data && data.status === 'stop') {
      updateStatusText('Server stopped');
    } else {
      updateStatusText('Unknown status');
    }
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

      if (response.status === 200) {
        handleServerResponse(JSON.parse(data.body));
      } else {
        updateStatusText('Error communicating with server');
      }
    } catch (error) {
      console.error('Error toggling EC2 instance:', error);
      updateStatusText('Currently not working');
    }
  });
});
