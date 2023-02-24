import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import { HeaderOnly } from "../components/Layout";
import Search from "../pages/Search";

const publicRoutes = [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/following",
      component: Following,
   },
   {
      path: "/profile",
      component: Profile,
   },
   {
      path: "/search",
      component: Search,
      layout: null,
   },
   {
      path: "/upload",
      component: Upload,
      layout: HeaderOnly,
   },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
