import Header from "../componentsLayout";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <Sidebar />
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
