import { Route } from "react-router-dom";
import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
            </div>
          </>
        );
      }}
    />
  );
};
