import resumeData from './resume.js';

export const handler = async (event) => {
  try {
    // Get the resume data
    const resumeData = await resumeData();

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
