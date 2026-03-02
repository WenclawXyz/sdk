import axios from "axios";

export const sendToNear = async (payload) => {
  try {
    const response = await axios.post(process.env.NEAR_RPC_URL, payload);
    return response.data;
  } catch (error) {
    throw new Error("Failed to send transaction to NEAR");
  }
};
