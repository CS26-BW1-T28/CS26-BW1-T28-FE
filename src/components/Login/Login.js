import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e, user) => {
    e.preventDefault();
    axios
      .post("https://cs1build.herokuapp.com/api/login/", user)
      .then(res => {
        console.log("Logging in");
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("user", user.username);
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err);
      });
    setUser({
      username: "",
      password: ""
    });
  };

  return (
    <div className="wrapper">
      <div className="signup-text">{/* <GlobalStyles /> */}</div>
      <form
        style={{
          textAlign: "center",
          width: "100%",
          height: "50vh",
          zIndex: '5'
        }}
        onSubmit={e => submitHandler(e, user)}
      >
        <div>
          <div className="title"> Sign in to your account </div>

          <div className="label"> Username </div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user.username}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <div className="label"> Password </div>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            required
          />
        </div>
        <button
          className="signup-btn"
          style={
            user.username && user.password
              ? { backgroundColor: "blue" }
              : {
                  color: "black",
                  backgroundColor: "f3f5f1",
                  fontWeight: "bold",
                  marginTop: "20px"
                }
          }
        >
          Login
        </button>
        <div>
          <div className="bottom">Don't have an account?</div>
          <div>
            <Link to="/registration">
              <div className="signup">SIGN UP</div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}