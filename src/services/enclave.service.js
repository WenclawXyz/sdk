import { encryptData, decryptData } from "../utils/crypto.js";

export const executeInEnclave = async (prompt) => {
  // Encrypt input before entering enclave
  const encryptedPrompt = encryptData(prompt);

  // Simulated enclave computation
  const processed = `Secure Response for: ${prompt}`;

  // Encrypt output
  const encryptedOutput = encryptData(processed);

  // Decrypt before returning (simulated attestation flow)
  return decryptData(encryptedOutput);
};
