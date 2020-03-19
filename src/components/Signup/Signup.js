import React, { useEffect, useState } from "react";
import { Form as FormikForm, Field, withFormik } from "formik";
import {Link} from 'react-router-dom';
import * as Yup from "yup";
import { Form } from "semantic-ui-react";
import axios from 'axios'
import "./signup.css";

const Signup = props => {
  const [user, setUser] = useState({});
  const { errors, touched, values, handleSubmit, status } = props;

  useEffect(() => {
    setUser(status);
  }, [status]);

  return (
    <>
      <div className="login-panel">
        <div className="login-title">
          <h1>SIGN UP</h1>
        </div>
        <FormikForm use="semantic-ui-react" className="login-form">
          <div>
            <Form.Field>
              <Field
                className="login-input one"
                type="username"
                name="username"
                data-testid="username"
                placeholder="Username"
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </Form.Field>
          </div>
          <div>
            <Form.Field>
              <Field
                className="login-input"
                type="password"
                name="password1"
                data-testid="password1"
                placeholder="Password"
              />
            </Form.Field>
          </div>{" "}
          <div>
            <Form.Field>
              <Field
                className="login-input"
                type="password"
                name="password2"
                data-testid="password2"
                placeholder="Confirm Password"
              />
            </Form.Field>
          </div>
          <div>
            <button
              className="login-button"
              onClick={handleSubmit}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
          <div>
            <Link to="/login">
              <div className="signup">Already have an Account?</div>
            </Link>
          </div>
        </FormikForm>
      </div>
    </>
  );
};


const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password1: Yup.string().required("Please enter your password"),
    password2: Yup.string().required("Please enter your password")
  }),
  
  handleSubmit(values, { props, setStatus, handleSubmit: e }) {
    axios
      .post("https://cs1build.herokuapp.com/api/registration/", values)
      .then(res => {
        console.log('Registered!');
        localStorage.setItem("token", res.data.key);
        setStatus(res.data);
        props.history.push(`/login`);
      })
      .catch(err => console.log(err.response));
  }
})(Signup);


export default FormikLoginForm;
