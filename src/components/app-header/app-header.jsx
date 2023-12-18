import styles from "./app-header.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>

      <nav className={styles.nav}>
        <ul className={styles.list}>

          <li className={`${styles.item} pl-5 pt-4 pr-5 pb-4`}>
            <BurgerIcon type="primary" />
            <a className={`${styles.link} text text_type_main-default`} href="">Конструктор</a>
          </li>

          <li className={`${styles.item} pl-5 pt-4 pr-5 pb-4`}>
            <ListIcon type="secondary" />
            <a className={`${styles.link} text text_type_main-default text_color_inactive`} href="">Лента заказов</a>
          </li>

        </ul>
      </nav>

      <div className={styles.logo}>
        <Logo />
      </div>

      <nav className={styles.account}>
        <ul className={styles.list}>

          <li className={`${styles.item} pl-5 pt-4 pr-5 pb-4`}>
            <ProfileIcon type="secondary" />
            <a className={`${styles.link} text text_type_main-default text_color_inactive`} href="">Личный кабинет</a>
          </li>
          
        </ul>
      </nav>

    </header>
  );
}

export default AppHeader;