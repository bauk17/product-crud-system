import { useState } from "react";
import { NewProduct } from "./components/NewProduct";
import { HandleGetUser } from "./handlers/handleGet";
import { Product } from "./components/Product";
import styles from "./styles/Main.module.css";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div>
      <div className={styles.mainHeader}>
        <h1>Cadastro de Produtos</h1>
        <button onClick={toggleComponent}>Adicionar novo Produto</button>
      </div>

      {showComponent && <NewProduct onClose={toggleComponent} />}
      <Product />
    </div>
  );
}

export default App;
