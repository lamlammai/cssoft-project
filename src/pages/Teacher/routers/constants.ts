// import Home from "@/pages/Teacher/Page/Home";
import Point from "@/pages/Teacher/Page/Point/point";
import InfoSV from "@/pages/Teacher/Page/InfoSV/InfoSV";
import Schedule from "../Page/Schedule/Schedule";
import Tuition from "../Page/Tuition/Tuition";
import Class from "../Page/Class/Class";
import InfoTeacher from "../Page/InfoTeacher/InfoTeacher";
import Attendance from "../Page/Attendance/Attendance";
import Lesson from "../Page/Lesson/Lesson";
import CalendarTeacher from "../Page/CalendarTeacher/CalendarTeacher";
import CalendarStudent from "../Page/CalendarStudent/CalendarStudent";

const ROUTES = {
  INFOSTUDENT: "/infostudent",
  SCHEDULE: "/",
  TUITION: "/tuition", // hoc phi
  POINT: "/point", // diểm
  ATTENDANCE: "/attendance", // điểm danh
  INFO: "/info",
  LESSON: "/lesson",
  CLASS: "/class",
  CALENDARTEACHER: "/calendarTeacher",
  CALENDARSTUDENT: "/calendarStudent",
};
const RoutesTeacher = [
  {
    path: ROUTES.INFOSTUDENT,
    exact: true,
    component: InfoSV,
  },
  {
    path: ROUTES.SCHEDULE,
    exact: true,
    component: Schedule,
  },
  {
    path: ROUTES.CALENDARTEACHER,
    exact: true,
    component: CalendarTeacher,
  },
  {
    path: ROUTES.CALENDARSTUDENT,
    exact: true,
    component: CalendarStudent,
  },
  {
    path: ROUTES.TUITION,
    exact: true,
    component: Tuition,
  },
  {
    path: ROUTES.POINT,
    exact: true,
    component: Point,
  },
  {
    path: ROUTES.ATTENDANCE,
    exact: true,
    component: Attendance,
  },
  {
    path: ROUTES.CLASS,
    exact: true,
    component: Class,
  },
  {
    path: ROUTES.INFO,
    exact: true,
    component: InfoTeacher,
  },
  {
    path: ROUTES.LESSON,
    exact: true,
    component: Lesson,
  },
];
export default RoutesTeacher;
