// libs
import "admin-lte/dist/js/adminlte.min";
import "bootstrap";
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
// routes
import appRoutes from "@/routers";
// others
import { store } from "@/redux/store";
import "@/styles/base.scss";

/**
 * App change smt
 */
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Suspensed">
        <ReduxProvider store={store}>
          <CssBaseline />
          <Switch>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </ReduxProvider>
      </Suspense>
    </BrowserRouter>
  );
}
