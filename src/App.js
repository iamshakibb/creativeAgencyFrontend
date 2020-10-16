import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllInHome from "./Components/Home/AllInHome/AllInHome";
import LoginForm from "./Components/LoginForm/LoginForm";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import AllServices from "./Components/Home/AllServices/AllServices";
import AllFeedback from "./Components/Home/AllFeedback/AllFeedback";
import NoMatch from "./Components/NoMatch/NoMatch";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import AllServicesList from "./Components/Dashboard/AllServicesList/AllServicesList";
import Order from "./Components/Dashboard/Order/Order";
import ServiceList from "./Components/Dashboard/ServiceList/ServiceList";
import Feedback from "./Components/Dashboard/Feedback/Feedback";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import OurTeam from "./Components/Home/OurTeam/OurTeam";
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
            <Route path="/loginForm">
              <LoginForm />
            </Route>
            <Route path="/allClientFeedback">
              <AllFeedback />
            </Route>
            <Route path="/allServices">
              <AllServices />
            </Route>
            <Route path="/ourTeam">
              <OurTeam />
            </Route>
            <PrivateRouter path="/addService">
              <AddServices />
            </PrivateRouter>
            <PrivateRouter path="/allServiceList">
              <AllServicesList />
            </PrivateRouter>
            <PrivateRouter path="/order/:title">
              <Order />
            </PrivateRouter>
            <PrivateRouter path="/order">
              <Order />
            </PrivateRouter>
            <PrivateRouter path="/serviceList">
              <ServiceList />
            </PrivateRouter>
            <PrivateRouter path="/feedback">
              <Feedback />
            </PrivateRouter>
            <PrivateRouter path="/makeAdmin">
              <MakeAdmin />
            </PrivateRouter>
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
