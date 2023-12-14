import { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import useModal from '../../hooks/useModal';
import Ingredient from "../ingredient/ingredient";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function BurgerIngredients({ items }) {

  const { isModalOpen, openModal, closeModal } = useModal();

  const [current, setCurrent] = useState('bun');
  const [modalIngredient, setModalIngredient] = useState(null);

  return (
    <>
      <section className={`${styles.container} pt-10`}>

        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

        <div className={styles.tabs}>

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

        <ul className={`${styles.ingredientsContainer} custom-scroll`}>
          <li className={`${styles.ingredientType} pt-8`}>
            <h2 className="text text_type_main-medium">Булки</h2>
            <ul className={`${styles.ingredients} pl-4 pr-4 pt-6`}>
              {items.map((item) => {
                if (item.type === "bun") {
                  return (
                    <Ingredient
                      key={item._id}
                      ingredientItem={item}
                      handleOpenModal={() => {
                        setModalIngredient(item)
                        openModal(true)
                      }}
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
                      ingredientItem={item}
                      handleOpenModal={() => {
                        setModalIngredient(item)
                        openModal(true)
                      }}
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
                      ingredientItem={item}
                      handleOpenModal={() => {
                        setModalIngredient(item)
                        openModal(true)
                      }}
                    />
                  );
                }
              })}
            </ul>
          </li>

        </ul>

      </section>

      {isModalOpen && (
        <Modal onClose={closeModal} >
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};