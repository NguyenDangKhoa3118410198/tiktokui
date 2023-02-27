import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles); // dung de co the su dung -  trong ten, vi du (post-item)
function Header() {
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>LOGO</div>
      </header>
   );
}

export default Header;
