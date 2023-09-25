import { useEffect, useState } from "react";
import { ProductType } from "../types/ProductType";
import { AxiosInstance } from "../services/AxiosInstance";
import styles from "../styles/NewProduct.module.css";

interface EditProps {
  productId: number;
  onClose: () => void;
}

export const EditProduct: React.FC<EditProps> = ({ productId, onClose }) => {
  const [newEditedProduct, setNewEditedProduct] = useState<ProductType>({
    title: "",
    type: "",
    price: "",
    gender: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEditedProduct({
      ...newEditedProduct,
      [name]: value,
    });
  };

  const handleEdit = async (productId: number) => {
    await AxiosInstance.put(`/product/${productId}`, newEditedProduct, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        console.log("Resposta: ", response.data.products);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
  return (
    <div className={styles.modalNewProduct}>
      <form action="" method="PUT" className={styles.mainContainer}>
        <div className={styles.containerHeader}>
          <h1>Editar Produto</h1>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.containerInput}>
          <label htmlFor="Nome do Produto:">Nome do Produto: </label>
          <input
            type="text"
            name="title"
            value={newEditedProduct.title}
            onChange={handleChange}
            placeholder="Editar Nome"
          />
        </div>
        <div className={styles.containerInput}>
          <label htmlFor="Tipo:">Tipo do Produto</label>
          <input
            type="text"
            name="type"
            value={newEditedProduct.type}
            onChange={handleChange}
            placeholder="Editar Sabor"
          />
        </div>
        <div className={styles.containerInput}>
          <label htmlFor="Preço:">Preço:</label>
          <input
            type="text"
            name="price"
            value={newEditedProduct.price}
            onChange={handleChange}
            placeholder="Editar Preço"
          />
        </div>
        <div className={styles.containerInput}>
          <label htmlFor="Gênero :">Tamanho:</label>
          <input
            type="text"
            name="gender"
            value={newEditedProduct.gender}
            onChange={handleChange}
            placeholder="Editar Tamanho"
          />
        </div>
        <div className={styles.containerInput}>
          <label htmlFor="Nova Descrição: ">Descrição</label>
          <input
            type="text"
            name="description"
            value={newEditedProduct.description}
            onChange={handleChange}
            placeholder="Nova Descrição"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handleEdit(productId)}
            className={styles.buttonSubmit}
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};
