import resumeData from './resume.js';

const handler = async (event) => {
  try {
    // Construct the response
    const response = {
      statusCode: 200,
      body: JSON.stringify(resumeData)
    };

    return response;
  } catch (error) {
    // Handle errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
