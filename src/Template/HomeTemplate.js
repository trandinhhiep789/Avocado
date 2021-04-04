import { Route } from "react-router-dom";
import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import MessengerCustomerChat from "react-messenger-customer-chat";

export const HomeTemplate = (props) => {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <div className="chaCuaFeedBack">
              <div>
                <Header />
                <Component {...propsRoute} />
                <Footer />
              </div>
              <MessengerCustomerChat
                pageId="112035807606509"
                appId="313735936845071"
              />
            </div>
          </>
        );
      }}
    />
  );
};
