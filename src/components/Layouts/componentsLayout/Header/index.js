import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles); // dung de co the su dung -  trong ten, vi du (post-item)
function Header() {
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <h1>KOSSPRZ</h1>

            <div className={cx("search")}>
               <input placeholder="Search something..." spellcheck={false} />
               <button className={cx("clear")}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>

               <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

               <button className={cx("search-btn")}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>

            <div className={cx("actions")}></div>
         </div>
      </header>
   );
}

export default Header;
