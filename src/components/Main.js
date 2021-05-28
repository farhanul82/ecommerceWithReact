import React, { Component } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Catogories from "./Catogories";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Showcategoritems from "./Showcategoritems";
import Productview from "./Productview";
import Order from "./Order";
import ChatbotComponent from "./ChatbotComponent";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import WhatNew from "./WhatNew";
import MenProd from "./MenProd";
import WomenProd from "./WomenProd";
import ShowCat from "./ShowCat";
import CheckO from "./CheckO";
import Cat from "./Cat";
import { useSelector, useDispatch } from "react-redux";
import { RiChatSmile3Fill } from "react-icons/ri";

const Main = () => {
  const homepage = () => {
    return <Home></Home>;
  };

  const products = () => {
    return <Products></Products>;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/category/:catNames">
          <Showcategoritems />
        </Route>

        <Route path="/check">
          <Checkout></Checkout>
        </Route>
        <Route path="/category">
          <Catogories />
        </Route>
        <Route exact path="/" component={homepage} />
        <Route exact path="/products" component={products} />

        <Route path="/order">
          <Order />;
        </Route>
        {/* <Route path="/catogories">
          <Catogories />
        </Route> */}
        {/* <Route path="/categories/:catNames">
          <Showcategoritems />
        </Route> */}

        {/* <Route path="/products/:prodId">
          <Productview />
        </Route> */}
        <Redirect exact path="/"></Redirect>

        <Route exact path="/what-new">
          <WhatNew></WhatNew>
        </Route>

        <Route path="/what-new/MenProduct">
          <MenProd />
        </Route>

        <Route path="/what-new/WomenProduct">
          <WomenProd></WomenProd>
        </Route>

        <Route path="/:prodId">
          <Productview />
        </Route>
      </Switch>

      <ChatbotComponent />

      <Footer />
    </div>
  );
};

export default Main;
