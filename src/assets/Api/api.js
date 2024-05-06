/*
 * FILE GET API
 */

const API = async (link) => {
  try {
    const response = await fetch(link);
    return response.json();
  } catch (error) {
    console.error("Error in request function :", error);
  }
};

export default API;
