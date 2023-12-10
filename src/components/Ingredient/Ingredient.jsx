import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({props}) {

  return (
    <li
      key={props._id}
      className={styles.ingredient}>
      {/* <Counter count={1} size="default" extraClass="m-1" /> */}
      <a className={styles.link} href="">
        <img className={styles.img} src={props.image} alt={props.name} />
        <div className={styles.price}>
          <span className="text text_type_digits-default">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.name}</p>
      </a>
    </li>    
  );

}

export default Ingredient;