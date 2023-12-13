import { useEffect, useState } from 'react';
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { urlIngredients } from "../../utils/api";

function App() {  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredientsData = async () => {
      try {
        const res = await fetch(urlIngredients);
        if (res.ok) {
          const data = await res.json();
          return setIsLoaded(false),
          setIngredients(data.data);
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      }
    }
    getIngredientsData();
  }, [])

  if (isLoaded === false && ingredients.length > 0) {
    return (
      <div className="p-10">

        <AppHeader />

        <main className={styles.container}>
          <BurgerIngredients items={ingredients} />
          <BurgerConstructor items={ingredients} />
        </main>
        
      </div>
    )
  } else {
    return (
      <div>Ошибка: {error}</div>
    )
  }
}

export default App;
