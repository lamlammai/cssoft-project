import ClassManager from "@/pages/Class/ManagerClass/managerClass";
import Page from "@/pages/Class";
import ListClass from "../ListClass/Listclass";

const ROUTES = {
  LISTCLASS: "/listclass",
  PAGEMANAGER: "/classmanager",
  MANAGERCLASS: "/ClassItem",
};
const RoutesManager = [
  {
    path: ROUTES.PAGEMANAGER,
    exact: true,
    component: Page,
  },
  {
    path: ROUTES.MANAGERCLASS,
    exact: true,
    component: ClassManager,
  },
  {
    path: ROUTES.LISTCLASS,
    exact: true,
    component: ListClass,
  },
];
export default RoutesManager;
