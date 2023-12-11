import styles from './ingredient.module.css';
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropType} from '../../utils/prop-types';

Ingredient.propTypes = {
  props: ingredientPropType,
  handleOpenModal: PropTypes.func
};

function Ingredient({ props, handleOpenModal }) {
  return (
    <li key={props._id} className={styles.ingredient} onClick={handleOpenModal}>

      {/* <Counter count={1} size="default" extraClass="m-1" /> */}

      <img className={styles.img} src={props.image} alt={props.name} />

      <div className={styles.price}>
        <span className="text text_type_digits-default">{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      <p className="text text_type_main-default">{props.name}</p>

    </li>
  );
}

export default Ingredient;