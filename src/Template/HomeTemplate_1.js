import { Route } from "react-router-dom";
import React from "react";

import Footer from "../Components/Footer";
import Header_1 from "../Components/Header_1";

import MessengerCustomerChat from "react-messenger-customer-chat";

// HomeTemplate_1 khác HomeTemplate là nó có chứa cái Header_1
export const HomeTemplate_1= (props) => {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <div className="chaCuaFeedBack">
              <div>
                <Header_1/>
                <Component {...propsRoute} />
                <Footer className="w-100"/>
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
