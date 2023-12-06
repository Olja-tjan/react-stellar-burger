import styles from "./app-header.module.css";
import { data } from "../../utils/data";
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
  return (
    <header className={`${styles.header} pb-4 pt-4`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.item} pl-5 pt-4 pr-5 pb-4`}>
            <BurgerIcon type="primary" />
            <a className={styles.activeLink} href="">Конструктор</a>
          </li>
          <li className={`${styles.item} pl-5 pt-4 pr-5 pb-4`}>
            <ListIcon type="secondary" />
            <a className={styles.link} href="">Лента заказов</a>
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
            <a className={styles.link} href="">Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;

// <div className={styles.app}>
//     <div
//         style={{ backgroundColor: '#0B5FFF', color: 'white' }}
//         className="pb-4 pt-4"
//     >
//         padding-bottom 16px: (4px × 4 = 16px) <br />
//         padding-top: 16px (4px × 4 = 16px)
//     </div>
//     <p className="text text_type_main-default">
//         The quick brown fox jumps over the lazy dog.
//     </p>
//     <p className="text text_type_main-default text_color_inactive">
//         The quick brown fox jumps over the lazy dog.
//     </p>
//     <pre style={{
//         margin: "auto",
//         fontSize: "1.5rem"
//     }}>
//         Измените src/components/app/app.jsx и сохраните для обновления.
//     </pre>
// </div>