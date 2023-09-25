import { useState } from "react";
import { AxiosInstance } from "../services/AxiosInstance";

export const HandleGetUser = async () => {
  const response = await AxiosInstance.get("/get-products");
  return response.data.products;
};
