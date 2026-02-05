import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllPackages = async () => {
  try {
    const response = await axios.get(`${API_URL}/packages`);
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};