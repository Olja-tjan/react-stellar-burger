import { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { ConstructorElement, CurrencyIcon, DragIcon, Button, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

BurgerConstructor.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

function BurgerConstructor({ items }) {
  const [visible, setVisible] = useState(false);

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <>
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
              return item.type !== "bun"
                ? (
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
                : null;
            })}
          </ul>

          <ul className={`${styles.ingredientsBottom}`}>
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
          </ul>

        </div>

        <div className={`${styles.totalPriceContainer} mt-5 pr-8`}>

          <div className={`${styles.totalPrice}`}>
            <p className="text text_type_digits-medium">0</p>
            <CurrencyIcon type="primary" />
          </div>

          <Button htmlType="submit" type="primary" size="large" onClick={() => setVisible(true)}>
            Оформить заказ
          </Button>

        </div>
      </section>

      <div style={{ overflow: 'hidden', position: 'fixed' }}>
        <Modal onClose={handleCloseModal} showModal={visible}>
          <OrderDetails />
        </Modal>
      </div>
    </>
  );
}

export default BurgerConstructor;