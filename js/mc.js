document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const statusText = document.getElementById('statusText');

  const instanceId = 'your_ec2_instance_id'; // Replace with your actual EC2 instance ID
  let action = 'start'; // You can change this to 'stop' when you want to stop the instance

  const apiUrl = 'https://your-api-gateway-endpoint'; // Replace with your actual API Gateway endpoint URL

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
        body: JSON.stringify({ instance_id: instanceId, action: action }),
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
});

