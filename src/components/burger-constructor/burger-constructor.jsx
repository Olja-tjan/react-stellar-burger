import styles from "./burger-constructor.module.css";
import { data } from "../../utils/data";
import { ConstructorElement, CurrencyIcon, DragIcon, Button, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerConstructor() {

  return (
    <section className={`${styles.container} pt-20`}>
      <div className={`${styles.ingredients} pt-5 pb-5 pl-4 pr-4`}>
        <ul className={`${styles.ingredientsTop}`}>
        </ul>

        <ul className={`${styles.ingredientsCenter} custom-scroll`}>
        </ul>
        
        <li className={`${styles.ingredientsBottom}`}>
        </li>
      {/* <DragIcon type="primary" /> */}
      {/* <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={img}
      /> */}
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