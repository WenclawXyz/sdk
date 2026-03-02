import { executeInEnclave } from "../services/enclave.service.js";

export const runInference = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required"
      });
    }

    const result = await executeInEnclave(prompt);

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};
