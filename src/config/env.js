export const config = {
  port: process.env.PORT || 3000,
  nearRpc: process.env.NEAR_RPC_URL,
  enclaveMode: process.env.ENCLAVE_MODE === "true",
  secretKey: process.env.SECRET_KEY
};
