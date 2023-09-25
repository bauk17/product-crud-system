import { ChangeEvent, useState } from "react";

import { ProductType } from "../types/ProductType";
import styles from "../styles/NewProduct.module.css";
import { handleSubmit, handleChange } from "../handlers/handleSubmit";

interface Props {
  onClose: () => void;
}

export const NewProduct: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState<ProductType>({
    title: "",
    type: "",
    price: "",
    gender: "",
    description: "",
  });

  return (
    <div>
      <div className={styles.modalNewProduct}>
        <form
          onSubmit={(e) => handleSubmit(e, formData, setFormData)}
          className={styles.mainContainer}
        >
          <div className={styles.containerInput}>
            <div className={styles.containerHeader}>
              <h1>Cadastrar novo produto</h1>
              <button onClick={onClose}>X</button>
            </div>
            <label htmlFor="title" className={styles.labelTitle}>
              Nome do Produto:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e, formData, setFormData)}
            />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => handleChange(e, formData, setFormData)}
            />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="price">Preço:</label>
            <input
              type="text" // Note que usamos tipo "text" para price, já que estamos enviando como string
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => handleChange(e, formData, setFormData)}
            />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="gender">Tamanho:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) => handleChange(e, formData, setFormData)}
            />
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e, formData, setFormData)}
              className={styles.descriptionTextArea}
            />
            <button
              type="submit"
              className={styles.buttonSubmit}
              onClick={() => {}}
            >
              Registrar novo produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
