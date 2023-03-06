import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({
   to,
   href,
   primary = false,
   outline = false,
   small = false,
   large = false,
   rounded,
   text = false,
   disable = false,
   children,
   onClick,
   className,
   leftIcon,
   rightIcon,
   ...passProps
}) {
   let Comp = "button";
   const props = { onClick, ...passProps };

   //Remove event listener when btn is disable
   if (disable) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith("on") && typeof props[key] === "function") {
            delete props[key];
         }
      });
   }

   if (to) {
      props.to = to;
      Comp = Link; //Link dung de di chuyen trang trong noi bo
   } else if (href) {
      props.href = href;
      Comp = "a";
   }

   const classes = cx("wrapper", {
      // [className]: className,
      primary,
      outline,
      small,
      large,
      rounded,
      text,
      disable,
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
         <span className={cx("title")}>{children}</span>
         {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
