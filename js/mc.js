document.addEventListener('DOMContentLoaded', async () => {
  const toggleButton = document.getElementById('serverToggle');
  const statusText = document.getElementById('statusText');

  const apiUrl = 'https://z180pb1pd3.execute-api.us-east-1.amazonaws.com/Prod/mc_start_stop';
    // Clear text password
  const correctPassword = 'abracadabra';

  const updateStatusText = (text) => {
    statusText.textContent = text;
  };

  const performAction = async (action) => {
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
  };

  const checkServerStatus = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ action: 'checkServer' }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log("Checking Server Status")
        const data = await response.json();
        const body = JSON.parse(data.body);
        const status = body.status;
        console.log(status)
        updateStatusText(`Server is ${status}`);
        updateToggleButton(status);
      } else {
        updateStatusText('Error checking server status');
      }
    } catch (error) {
      console.error('Error checking server status:', error);
      updateStatusText('Currently not working');
    }
  };

  const updateToggleButton = (status) => {
    toggleButton.checked = status === 'running' || status === 'pending';
  };

  checkServerStatus();

  setInterval(checkServerStatus, 10000);

  toggleButton.addEventListener('change', async () => {
    let action;
    if (toggleButton.checked) {
      action = 'start';
      performAction(action);
    } else {
      const password = prompt('Enter password to toggle the button off:');
      if (password === correctPassword) {
        action = 'stop';
        performAction(action);
      } else {
        toggleButton.checked = true; // Prevent toggling off if password is incorrect
      }
    }
  });
});
