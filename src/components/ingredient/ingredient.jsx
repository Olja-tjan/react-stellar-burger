import styles from './ingredient.module.css';
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropType} from '../../utils/prop-types';

Ingredient.propTypes = {
  ingredientItem: ingredientPropType,
  handleOpenModal: PropTypes.func
};

function Ingredient({ ingredientItem, handleOpenModal }) {
  return (
    <li key={ingredientItem._id} className={styles.ingredientContainer} onClick={handleOpenModal}>

      <Counter count={1} size="default" extraClass="m-1" />

      <img className={styles.img} src={ingredientItem.image} alt={ingredientItem.name} />

      <div className={styles.price}>
        <span className="text text_type_digits-default">{ingredientItem.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      <p className="text text_type_main-default">{ingredientItem.name}</p>

    </li>
  );
}

export default Ingredient;