import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserInfoContent } from "../../App";

const PrivateRouter = ({ children, ...rest }) => {
  const user = useContext(UserInfoContent);
  const { userInfo } = user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo.isLogin === true && userInfo.email.length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginForm",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
