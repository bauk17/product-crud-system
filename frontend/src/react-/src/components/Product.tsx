import { useEffect, useState } from "react";
import { HandleGetUser } from "../handlers/handleGet";
import { AxiosInstance } from "../services/AxiosInstance";
import styles from "../styles/Product.module.css";

import { EditProduct } from "./EditProduct";
import { ProductType } from "../types/ProductType";

interface Product {
  title: string;
  type: string;
  price: string;
  gender: string;
  description: string;
  id: number;
}

export const Product = () => {
  useEffect(() => {
    handleButtonGet();
  }, []);
  const [productList, setProductList] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  const handleButtonGet = async () => {
    try {
      const productData = await HandleGetUser();
      setProductList(productData);
    } catch (error) {
      console.error("Erro ao obter dados", error);
    }
  };
  const handleEdit = (productId: number) => {
    setEditingProduct(productId);
  };
  const handleDelete = (productId: number) => {
    AxiosInstance.delete(`/product/${productId}`).then((response) =>
      window.location.reload()
    );
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sabor</th>
            <th>Preço</th>
            <th>Tamanho</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
              <td>{item.gender}</td>
              <td className={styles.description}>{item.description}</td>
              <td className={styles.buttonsSection}>
                <div className={styles.buttons}>
                  <button
                    onClick={() => {
                      handleEdit(item.id);
                      toggleComponent();
                    }}
                    className={styles.buttonEdit}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={styles.buttonDelete}
                  >
                    Deletar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showComponent && editingProduct !== null && (
        <EditProduct productId={editingProduct} onClose={toggleComponent} />
      )}
    </div>
  );
};
