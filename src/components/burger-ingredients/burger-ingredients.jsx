import styles from "./burger-ingredients.module.css";
import { data } from "../../utils/data";
import { Counter, CurrencyIcon, Tab, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerIngredients() {

  // const [current, setCurrent] = React.useState('Булки')
  
  return (
    <section className={`${styles.container} pt-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

      {/* <div style={{ display: 'flex' }}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div> */}
      
      <ul className={`${styles.ingredientsContainer} custom-scroll`}>
        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            <li className={styles.ingredient}>
              <a className={styles.link} href="">
                <Counter count={1} size="default" extraClass="m-1" />
                <img className={styles.img} src="" alt="" />
                <div className={styles.price}>
                  <span className="text text_type_digits-default">0</span>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default"></p>
              </a>
            </li>
          </ul>
        </li>

        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            <li className={styles.ingredient}>
              <a className={styles.link} href="">
                <img className={styles.img} src="" alt="" />
                <div className={styles.price}>
                  <span className="text text_type_digits-default">0</span>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default"></p>
              </a>
            </li>
          </ul>
        </li>

        <li className={`${styles.ingredientType} pt-8`}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
            <li className={styles.ingredient}>
              <a className={styles.link} href="">
                <img className={styles.img} src="" alt="" />
                <div className={styles.price}>
                  <span className="text text_type_digits-default">0</span>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default"></p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default BurgerIngredients;