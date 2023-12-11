import styles from './ingredient-details.module.css';
import {ingredientPropType} from '../../utils/prop-types';

IngredientDetails.propTypes = {
  props: ingredientPropType
};

function IngredientDetails({ props }) {
  return (
    <section className={`${styles.ingredient} pt-10 pl-10 pr-10 pb-15`}>

      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>

      <img src={props.image_large} alt={props.name} className={styles.image} />

      <h3 className='text text_type_main-medium mt-4 mb-8'>{props.name}</h3>

      <ul className={styles.list}>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Калории, ккал</p>
          <span>{props.calories}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Белки, г</p>
          <span>{props.proteins}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Жиры, г</p>
          <span>{props.fat}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Углеводы, г</p>
          <span>{props.carbohydrates}</span>
        </li>

      </ul>

    </section>
  );
}

export default IngredientDetails;