// routes
import { ROUTES } from "@/constants/routers";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import Teacher from "@/pages/Teacher";
import ClassManager from "@/pages/Class";
/**
 * define main pages routes
 */
const appRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: Signin,
  },
  {
    path: ROUTES.TEACHER,
    exact: true,
    component: Teacher,
  },
  {
    path: ROUTES.CLASS,
    exact: false,
    component: ClassManager,
  },
];

export default appRoutes;
