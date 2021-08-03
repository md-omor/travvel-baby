import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { isAuth } from "../helpers/auth";

import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const SignUpPage = () => {
  // const [username, setusername] = useState("");
  // const [firstname, setfirstname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);
  const history = useHistory();

  // const [ifsuccess, setifsuccess] = useState(null);
  // const [ifError, setifError] = useState(null);

  // const [formData, setformData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const { firstname, lastname, username, email, password } = formData;

  // const handleCHange = (text) => (e) => {
  //   // console.log(firstname, lastname, username, email, password);
  //   setformData({ ...formData, [text]: e.target.value });
  // };

  const onSubmit = async (values) => {
    // e.preventDefault();
    alert(JSON.stringify(values));
    // console.log(values);

    let { ...data } = values;
    // console.log(data);
    let response = await axios
      .post("https://yartitravelbaby.herokuapp.com/api/auth/signup ", data)
      .catch((err) => {
        if (err) {
          console.log("Error", err);
          seterror(err.response.data.message);
          setsuccess(null);
        }
      });
    // localStorage.setItem("user-info", JSON.stringify(response));
    // if (response && response.data) {
    //   history.push("/login");
    // }
    console.log(response);
    if (response && response.data) {
      seterror(null);
      setsuccess(response.data.msg);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      username: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Wrapper>
      <div className="section section-center text-center">
        {isAuth() ? <Redirect to="/" /> : null}
        {/* <div className="">{ifsuccess}</div> */}
        {/* <div className="">{ifError}</div> */}
        <div className="sign__up_wrapper">
          <div className="sign__up_header">
            <h3>Create a new account</h3>
            <h5>Sign Up and Let's travvel baby</h5>
          </div>

          <div className="sign__up_method">
            <a href="https://google.com/">
              <div className="sign__up_google">Sign up with google</div>
            </a>
            <a href="https://www.facebook.com/">
              <div className="sign__up_social">
                <FaFacebookF />
              </div>
            </a>
            <a href="https://twitter.com/">
              <div className="sign__up_social">
                <FaTwitter />
              </div>
            </a>
          </div>
          {/* {!error && <div className="success">{success ? success : ""}</div>} */}
          {/* {!success && <div className="error">{error ? error : ""}</div>} */}
          <form className="sign__up_form" onSubmit={formik.handleSubmit}>
            <div className="form__name">
              <div className="sign__up_details">
                <label htmlFor="First-Name">First Name</label>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  name="firstname"
                  onBlur={formik.handleBlur}
                  // onChange={handleCHange("firstname")}
                  // value={firstname}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname
                    ? formik.errors.firstname
                    : ""}
                </div>
              </div>

              <div className="sign__up_details">
                <label htmlFor="Last-Name">Last Name</label>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  name="lastname"
                  onBlur={formik.handleBlur}
                  // onChange={handleCHange("lastname")}
                  // value={lastname}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname
                    ? formik.errors.lastname
                    : ""}
                </div>
              </div>
            </div>

            <div className="from_email_pass">
              <label htmlFor="User Name">User Name</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                // onChange={handleCHange("username")}
                // value={username}
              />
              <div className="error">
                {formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : ""}
              </div>
            </div>

            <div className="from_email_pass">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                // onChange={handleCHange("email")}
                // value={email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </div>
            </div>

            <div className="from_email_pass">
              <label htmlFor="Passwod">Passwod</label>
              <input
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                // onChange={handleCHange("password")}
                // value={password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </div>
            </div>

            <p>
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
            {/* <Link to="/"> */}
            <button className="btn" type="submit" disabled={!formik.isValid}>
              Sign Up
            </button>
            {/* </Link> */}
          </form>

          <p className="wrapper__footer">
            Have an account?
            <Link to="/login">
              <span> Sign In Now</span>
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error {
    /* color: #b32e2e; */
    color: #cc3b3bfc;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }
  .success {
    color: #40b933fc;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }
  .sign__up_wrapper {
    width: 400px;
    margin: auto;
  }

  .sign__up_header {
    text-align: left;

    h3 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 30px;
      color: #b76e79;
    }

    h5 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #2d3748;
      margin-top: 20px;
    }
  }

  .sign__up_method {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    margin-top: 40px;
  }

  .sign__up_google {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #b76e79;
    background: #daf6c5;
    border-radius: 5px;
    width: 212px;
    padding-top: 15px;
    height: 50px;
    cursor: pointer;
  }
  .sign__up_social {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #b76e79;
    background: #daf6c5;
    border-radius: 5px;
    width: 50px;
    padding-top: 15px;
    height: 50px;
    cursor: pointer;
  }

  .form__name {
    display: flex;
    text-align: left;
    margin-top: 45px;
  }

  .sign__up_details {
    label {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #4a5568;
    }
    input {
      border: 1px solid #d8d8d8fa;
      border-radius: 5px;
      outline: none;
      margin-top: 20px;
      padding: 16px 15px;
      margin-right: 40px;
    }
  }

  .from_email_pass {
    width: 100%;
    text-align: left;
    margin-top: 20px;

    label {
      font-family: SofiaPro;
      display: block;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #4a5568;
    }

    input {
      border: 1px solid #d8d8d8fa;
      border-radius: 5px;
      outline: none;
      margin-top: 20px;
      padding: 16px 15px;
      width: 100%;
    }
  }

  .sign__up_form p {
    font-family: SofiaPro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    text-align: left;
    width: 250px;
  }

  .wrapper__footer {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-top: 30px;
    line-height: 16px;
    color: #2c5282;
    span {
      font-family: SofiaPro;
      font-family: unset;
      color: #0f32dbd9;
      font-weight: 400;
      font-size: 16px;
      font-style: normal;
      line-height: 18.75px;
      cursor: pointer;
    }
  }
`;

export default SignUpPage;
