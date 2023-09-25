import { useEffect, useState } from "react";
import { HandleGetUser } from "../handlers/handleGet";
import { AxiosInstance } from "../services/AxiosInstance";
import styles from "../styles/Product.module.css";

interface Product {
  id: number;
  title: string;
  type: string;
  price: number;
  gender: string;
  description: string;
}

export const Product = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    handleButtonGet();
  }, []);
  const handleButtonGet = async () => {
    try {
      const productData = await HandleGetUser();
      console.log(productData);
      console.log(typeof productData);
      setProductList(productData);
      console.log(productList);
    } catch (error) {
      console.error("Erro ao obter dados", error);
    }
  };

  return (
    <div>
      <div className={styles.etiqueta}>
        <div className={styles.itens}>
          <h4>ID</h4>
          <h4>Nome</h4>
          <h4>Sabor</h4>
          <h4>Preço: </h4>
          <h4>Tamanho: </h4>
          <h4>Descrição</h4>
        </div>
      </div>
      {productList?.map((item) => (
        <div className={styles.mainContainer}>
          <div className={styles.test}>
            <p key={item.id}>{item.id}</p>
          </div>
          <div className={styles.test}>
            <p key={item.id}>{item.title}</p>
          </div>
          <div className={styles.test}>
            <p key={item.id}>{item.type}</p>
          </div>
          <div className={styles.test}>
            <p key={item.id}>{item.price}</p>
          </div>
          <div className={styles.test}>
            <p key={item.id}>{item.gender}</p>
          </div>
          <div className={styles.test}>
            <p key={item.id}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const test = () => {};
