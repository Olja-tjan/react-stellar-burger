import styles from './order-details.module.css';
import done from '../../images/done.svg';

function OrderDetails() {
  return (
    <section className={`${styles.order} p-25`}>

      <span className={`${styles.number} text text_type_digits-large mt-5 mb-8`}>
        034536
      </span>

      <p className="text text_type_main-medium">
        идентификатор заказа
      </p>

      <img className={`${styles.image} mt-15 mb-15`} src={done} alt="Done" />

      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      
      <p className="text text_type_main-default text_color_inactive mb-5">Дождитесь готовности на орбитальной станции</p>
    </section>
  )
}

export default OrderDetails;