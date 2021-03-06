import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadHomestayPage/UploadHomestayPage";
import DetailHomestayPage from "./views/DetailHomestayPage/DetailHomestayPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import HomestayPage from "./views/HomestayPage/HomestayPage";
import LandingPage from "./views/LandingPage/LandingPage.js";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "0px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/homestays" component={Auth(HomestayPage, true)} />
          <Route
            exact
            path="/homestay/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            exact
            path="/homestay/:homestayId"
            component={Auth(DetailHomestayPage, null)}
          />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
