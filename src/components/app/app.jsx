import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from "../app-header/app-header";


function App() {
  return (
    <div className="p-10">
      <AppHeader />
      <main>
        <section>
          <h1>Соберите бургер</h1>
          <div>
            <div>
              <span>Булки</span>
            </div>
            <div>
              <span>Соусы</span>
            </div>
            <div>
              <span>Начинки</span>              
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h2>Булки</h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h2>Соусы</h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h2>Начинки</h2>
              <p></p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <p></p>
            <p></p>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <p></p>
            <p></p>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
            <button></button>
          </div>
          <div>
            <p></p>
            <button></button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
