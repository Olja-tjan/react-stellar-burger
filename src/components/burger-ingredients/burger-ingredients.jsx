import { useState, useRef } from 'react';
import styles from "./burger-ingredients.module.css";
import { Counter, CurrencyIcon, Tab, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../Ingredient/Ingredient";


function BurgerIngredients({ items }) {

const [current, setCurrent] = useState('bun');

  return (
    <section className={`${styles.container} pt-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <ul  className={`${styles.ingredientsContainer} custom-scroll`}>
        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            {items.map((item) => {
              if (item.type === "bun") {
                return (
                  <Ingredient
                    key={item._id}
                    props={item}
                  />
                );
              }
            })}
          </ul>
        </li>

        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            {items.map((item) => {
              if (item.type === "sauce") {
                return (
                  <Ingredient
                    key={item._id}
                    props={item}
                  />
                );
              }
            })}
          </ul>
        </li>

        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            {items.map((item) => {
              if (item.type === "main") {
                return (
                  <Ingredient
                    key={item._id}
                    props={item}
                  />
                );
              }
            })}
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default BurgerIngredients;