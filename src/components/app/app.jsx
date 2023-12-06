import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";


function App() {
  return (
    <div className="p-10">
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients />

        <section>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <p></p>
            <p></p>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <p></p>
            <p></p>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
            <button></button>
          </div>
          <div>
            <p></p>
            <button></button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
