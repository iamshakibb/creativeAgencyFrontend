import React, { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserInfoContent } from "../../App";
import firebaseConfig from "../../Firebase/FirebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";

const firebaseInit = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};
firebaseInit();
export default function LoginForm() {
  document.body.style.backgroundColor = "#fff";
  const user = useContext(UserInfoContent);
  const { userInfo, setUserInfo } = user;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // handling the google login
  const handleGoogleLogin = () => {
    setUserInfo({ ...userInfo, signupError: "" });
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const newUser = { ...userInfo };
        newUser.signupError = "";
        setUserInfo(newUser);
        const { displayName, email, photoURL } = result.user;
        const info = {
          isLogin: true,
          name: displayName,
          email: email,
          img: photoURL,
        };
        setUserInfo(info);
        sessionStorage.setItem("email", email, "img", photoURL);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        const info = {
          isLogin: false,
        };

        setUserInfo(info);
        setUserInfo({ ...userInfo, signupError: errorMessage });
      });
  };

  const removeErrorMesssage = () => {
    setUserInfo({ ...userInfo, signupError: "" });
  };
  return (
    <Container>
      <Row>
        <div className="col-sm-12 text-center">
          <Link to="/">
            <img src="https://i.ibb.co/t445Mcy/logo.png" className="pt-3" style={{ width: "120px" }} alt="logo" />
          </Link>
        </div>

        <div className="col-sm-12">
          <div className="my-5 d-flex justify-content-center align-items-center p-3" style={{ border: "2px solid #ABABAB", height: "50vh" }}>
            <Row className="justify-content-center align-items-center">
              <div className="col-sm-12 text-center">
                <p className="error">{userInfo.signupError}</p>
              </div>
              <Button
                onMouseEnter={removeErrorMesssage}
                onClick={() => handleGoogleLogin()}
                style={{ backgroundColor: "#fff", border: "2px solid #ABABAB", color: "#000" }}
                className="px-5  d-flex justify-content-center align-items-center"
              >
                <img src="https://i.ibb.co/jRKzCQ5/Group-573.png" className="mx-5" alt="Google" />
                <span>Continue with Google</span>
              </Button>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  );
}
