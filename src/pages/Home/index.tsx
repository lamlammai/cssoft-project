// libs
// import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// hooks
// import { useRouter } from "@/hooks/router/useRouter";
// import { useStore } from "@/hooks/useStore";
// actions
// // import { updateMagicNumber } from "@/redux/actions/example";
// // others
// import { notify } from "@/utils/notify";
// import { ROUTES } from "@/constants/routers";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

// TODO: talk

/**
 * Home
 */
export default function Home() {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const { magicNumber } = useStore("Home", "exampleReducer");

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
