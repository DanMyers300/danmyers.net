document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('serverToggle');
  const statusText = document.getElementById('statusText');

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

  const getStatusFromServer = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        handleServerResponse(data);
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
