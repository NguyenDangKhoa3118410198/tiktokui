import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItems from "../../../AccountItems";

const cx = classNames.bind(styles); // dung de co the su dung -  trong ten, vi du (post-item)
function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         console.log("1");
         setSearchResult([]);
      }, 1000);
   }, []);

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <h1>KOSSPRZ</h1>

            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        <AccountItems />
                        <AccountItems />
                     </PopperWrapper>
                  </div>
               )}
            >
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
            </Tippy>

            <div className={cx("actions")}></div>
         </div>
      </header>
   );
}

export default Header;
