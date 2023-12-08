import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
  return (
    <div className="p-10">
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>

    </div>
  );
}

export default App;
