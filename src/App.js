import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllInHome from "./Components/Home/AllInHome/AllInHome";
import DashboardHome from "./Components/Dashboard/Dashboard Home/DashboardHome";
import LoginForm from "./Components/LoginForm/LoginForm";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import AllServices from "./Components/Home/AllServices/AllServices";
import AllFeedback from "./Components/Home/AllFeedback/AllFeedback";
import NoMatch from "./Components/NoMatch/NoMatch";
export const MessageContext = createContext();
export const UserInfoContent = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    name: "",
    email: "",
    img: "",
  });
  const [message, setMessage] = useState({
    error: "",
    success: "",
  });
  return (
    <UserInfoContent.Provider value={{ userInfo, setUserInfo }}>
      <MessageContext.Provider value={{ message, setMessage }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <AllInHome />
            </Route>
            <Route exact path="/home">
              <AllInHome />
            </Route>
            <PrivateRouter path="/dashboard">
              <DashboardHome />
            </PrivateRouter>
            {/* <Route path="/dashboard">
              <DashboardHome />
            </Route> */}
            <Route path="/loginForm">
              <LoginForm />
            </Route>
            <Route path="/allClientFeedback">
              <AllFeedback />
            </Route>
            <Route path="/allServices">
              <AllServices />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </MessageContext.Provider>
    </UserInfoContent.Provider>
  );
}

export default App;
