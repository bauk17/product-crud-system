import { AxiosInstance } from "./AxiosInstance";

// GET

export const getProducts = async () => {
  try {
    const response = await AxiosInstance.get("/get-products");
    if (!response) {
      throw new Error("Não foi possível buscar os dados da API");
    }

    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

// POST

export const createProduct = async () => {
  try {
    const response = await AxiosInstance.post("/new-product", {});
  } catch (e) {}
};

// DELETE

// PUT
