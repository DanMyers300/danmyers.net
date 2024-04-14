const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    // Fetch the raw content of the resume.js file from the GitHub repository
    const response = await fetch('https://raw.githubusercontent.com/DanMyers300/danmyers.net/main/api/lambda/resume.js');
    
    if (!response.ok) {
      throw new Error('Failed to fetch resume data');
    }
    
    const resumeData = await response.text();

    // Construct the response
    const responseBody = JSON.stringify({ resumeData });

    return {
      statusCode: 200,
      body: responseBody
    };
  } catch (error) {
    // Handle errors
    console.error('Error fetching resume data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
