import { ProductType } from "../types/ProductType";
import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import axios from "axios";

export const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formData: ProductType,
  setFormData: Dispatch<SetStateAction<ProductType>>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const handleSubmit = async (
  e: React.FormEvent,
  formData: ProductType,
  setFormData: Dispatch<SetStateAction<ProductType>>
) => {
  const initialFormData = {
    title: "",
    type: "",
    price: "",
    gender: "",
    description: "",
  };
  e.preventDefault();

  try {
    const formObject: Record<string, string> = {};

    formData.title && (formObject["title"] = formData.title);
    formData.type && (formObject["type"] = formData.type);
    formData.price && (formObject["price"] = formData.price);
    formData.gender && (formObject["gender"] = formData.gender);
    formData.description && (formObject["description"] = formData.description);

    const formBody = new URLSearchParams(formObject).toString();

    const response = await axios.post(
      "http://localhost:4000/new-product",
      formBody,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.status === 200) {
      console.log("Objeto criado com sucesso!");

      setFormData(initialFormData);
      window.location.reload();
    } else {
      console.error("Erro ao criar objeto no banco de dados.");
      // Lide com o erro de acordo com suas necessidades.
    }
  } catch (error) {
    console.error("Erro na solicitação:", error);
    // Lide com o erro de rede ou outros erros conforme necessário.
  }
};
