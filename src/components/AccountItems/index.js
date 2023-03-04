import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";

const cx = classNames.bind(styles);
function AccountItems() {
   return (
      <div className={cx("wrapper")}>
         <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/492438b8f975801067c3360c4e6c4951~c5_100x100.jpeg?x-expires=1678024800&x-signature=x5HCeuE6vkqFi6PTTLB0YTXOi70%3D"
            alt="IMG"
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>SaSa</h4>
            <span className={cx("username")}>qu.chang26</span>
         </div>
      </div>
   );
}

export default AccountItems;
