document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('serverToggle');
  const statusText = document.getElementById('statusText');

  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod/mc_start_stop';
  const serverUrl = 'https://mc.danmyers.net';

  const updateStatusText = (text) => {
    statusText.textContent = text;
  };

  const checkServerStatus = async () => {
    try {
      const response = await fetch(serverUrl);
      if (response.status === 200) {
        updateStatusText('Server online');
      } else {
        updateStatusText('Server offline');
      }
    } catch (error) {
      updateStatusText('Server offline');
    }
  };

  // Call the checkServerStatus function on page load to check server status
  checkServerStatus();

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
        const data = await response.json();
        const body = JSON.parse(data.body);
        updateStatusText(body.message);
      } else {
        updateStatusText('Error communicating with server');
      }
    } catch (error) {
      console.error('Error toggling EC2 instance:', error);
      updateStatusText('Currently not working');
    }
  });
});
