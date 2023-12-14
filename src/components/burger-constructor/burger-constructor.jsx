import { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { ConstructorElement, CurrencyIcon, DragIcon, Button, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor({ items }) {
  const [visible, setVisible] = useState(false);

  const bun =
    items.find((item) => {
      return item.type === "bun"
        ? (item)
        : null;
    });

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <>
      <section className={`${styles.container} pt-20`}>
        <div className={`${styles.ingredients} pt-5 pb-5 pl-4 pr-4`}>

          <ul className={`${styles.ingredientsTop}`}>
            <ConstructorElement
              key={bun._id}
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </ul>

          <ul className={`${styles.ingredientsCenter} custom-scroll`}>
            {items.map((item) => {
              return item.type !== "bun"
                ? (
                  <div key={item._id} className={styles.ingredientsCenterContainer}>
                    <DragIcon type="primary" />
                    <ConstructorElement
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
            <ConstructorElement
              key={bun._id}
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </ul>

        </div>

        <div className={`${styles.totalPriceContainer} mt-5 pr-8`}>

          <div className={`${styles.totalPrice}`}>
            <p className="text text_type_digits-medium">610</p>
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

BurgerConstructor.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};