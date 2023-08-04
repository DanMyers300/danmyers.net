document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('serverToggle');
  const statusText = document.getElementById('statusText');

  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod/mc_start_stop';

  const updateStatusText = (text) => {
    statusText.textContent = text;
  };

  toggleButton.addEventListener('change', async () => {
    let action;
    if (toggleButton.checked) {
      action = 'start';
    } else {
      action = 'stop';
    }
    updateStatusText('Loading');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ action }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const body = JSON.parse(data.body);
        updateStatusText(body.message);
      } else {
        const data = await response.json();
        const body = JSON.parse(data.body);
        updateStatusText(`Error: ${body.message}`);
      }
    } catch (error) {
      console.error('Error toggling EC2 instance:', error);
      updateStatusText('Currently not working');
    }
  });
});
