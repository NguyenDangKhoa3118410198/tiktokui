import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import Sasa from "../assets/img/1_IMG.jpeg";

const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src={Sasa} alt="IMG" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>SaSa</h4>
        <span className={cx("username")}>qu.chang26</span>
      </div>
    </div>
  );
}

export default AccountItems;
