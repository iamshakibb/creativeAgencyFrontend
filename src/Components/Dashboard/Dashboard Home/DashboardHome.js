import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import DashBoardNavbar from "../DashBoardNavbar/DashBoardNavbar";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddServices from "../AddServices/AddServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Feedback from "../Feedback/Feedback";
import Order from "../Order/Order";
import ServiceList from "../ServiceList/ServiceList";
import AllServicesList from "../AllServicesList/AllServicesList";
import { UserInfoContent } from "../../../App";

export default function DashboardHome() {
  const user = useContext(UserInfoContent);
  const { userInfo, setUserInfo } = user;
  return (
    <Router>
      <DashBoardNavbar userInfo={userInfo} setUserInfo={setUserInfo} />
      <Container className="px-0">
        <Row>
          <DashboardSlider userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className="col-md-9  d-flex justify-content-center " style={{ height: "85vh" }}>
            <Switch>
              <Route path="/dashboard/addService">
                <AddServices />
              </Route>
              <Route path="/dashboard/makeAdmin">
                <MakeAdmin userInfo={userInfo} setUserInfo={setUserInfo} />
              </Route>
              <Route path="/dashboard/allServicesList">
                <AllServicesList />
              </Route>
              <Route path="/dashboard/order/:title">
                <Order />
              </Route>
              <Route path="/dashboard/order">
                <Order />
              </Route>
              <Route path="/dashboard/serviceList">
                <ServiceList userInfo={userInfo} setUserInfo={setUserInfo} />
              </Route>
              <Route path="/dashboard/feedback">
                <Feedback userInfo={userInfo} setUserInfo={setUserInfo} />
              </Route>
            </Switch>
          </div>
        </Row>
      </Container>
    </Router>
  );
}
