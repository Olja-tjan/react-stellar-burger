import styles from "./burger-constructor.module.css";
import { data } from "../../utils/data";
import { ConstructorElement, CurrencyIcon, DragIcon, Button, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerConstructor({ items }) {

  return (
    <section className={`${styles.container} pt-20`}>
      <div className={`${styles.ingredients} pt-5 pb-5 pl-4 pr-4`}>
        <ul className={`${styles.ingredientsTop}`}>
        {items.map((item) => {
            return item.type === "bun"
              ? (
                <ConstructorElement
                  key={item._id}
                  type="top"
                  isLocked={true}
                  text={`${item.name} (верх)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              )
              : null;
          })}
        </ul>

        <ul className={`${styles.ingredientsCenter} custom-scroll`}>
        {items.map((item) => {
            return (
              <div className={styles.ingredientsCenterContainer}>
                <DragIcon type="primary" />
                <ConstructorElement
                  key={item._id}
                  text={`${item.name}`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
              )
          })}
        </ul>
        
        <li className={`${styles.ingredientsBottom}`}>
        {items.map((item) => {
            return item.type === "bun"
              ? (
                <ConstructorElement
                  key={item._id}
                  type="bottom"
                  isLocked={true}
                  text={`${item.name} (низ)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              )
              : null;
          })}
        </li>
      </div>

      <div className={`${styles.totalPriceContainer} mt-5`}>
        <div className={`${styles.totalPrice}`}>
          <p className="text text_type_digits-medium">0</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button htmlType="submit" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;