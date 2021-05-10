import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* ログインページ */}
      <Route exact path="/">
        <Login />
      </Route>
      {/* ホーム・管理・設定ページ */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      ></Route>

      {/* 404ページ */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
