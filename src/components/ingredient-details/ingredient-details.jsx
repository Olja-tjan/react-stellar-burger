import styles from './ingredient-details.module.css';
import {ingredientPropType} from '../../utils/prop-types';

function IngredientDetails({ ingredient }) {
  return (
    <section className={`${styles.ingredientContainer} pt-10 pl-10 pr-10 pb-15`}>

      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>

      <img src={ingredient.image_large} alt={ingredient.name} className={styles.image} />

      <h3 className='text text_type_main-medium mt-4 mb-8'>{ingredient.name}</h3>

      <ul className={styles.list}>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Калории, ккал</p>
          <span>{ingredient.calories}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Белки, г</p>
          <span>{ingredient.proteins}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Жиры, г</p>
          <span>{ingredient.fat}</span>
        </li>

        <li className={`${styles.item} text text_type_main-default text_color_inactive`}>
          <p className='text'>Углеводы, г</p>
          <span>{ingredient.carbohydrates}</span>
        </li>

      </ul>

    </section>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: ingredientPropType
};