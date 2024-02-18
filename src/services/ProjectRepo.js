import axios from "axios";

export const getProject = async (callback) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/kiraascoder/repos"
    );
    callback(null, response.data);
  } catch (error) {
    callback(error);
    console.error("Error mengambil data:", error);
  }
};
