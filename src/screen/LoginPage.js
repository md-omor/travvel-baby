import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Travvelbaby Main White (1).svg";

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <div className="sign__up_wrapper">
          <div className="sign__up_header">
            <img src={logo} alt="logo" />
            <h5>Welcome back</h5>
            <h3>Login to your account</h3>
          </div>

          <form className="sign__up_form">
            <div className="from_email_pass">
              <label htmlFor="Email">Email</label>
              <input type="email" />
            </div>

            <div className="from_email_pass">
              <label htmlFor="Passwod">Passwod</label>
              <input type="password" />
            </div>

            <div className="forget__password">
              <span className="forget__pass_dot"></span>
              <span>Remember me</span>
              <Link to="/rest_pass">
                <p>Forgot password?</p>
              </Link>
            </div>

            <Link to="/">
              <button className="btn">Login now</button>
            </Link>
          </form>

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

          <p className="wrapper__footer">
            Dont have an account?
            <Link to="/signup">
              <span>Sign Up Now</span>
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sign__up_wrapper {
    width: 400px;
    margin: auto;
    
  }

  .sign__up_header {
    text-align: left;

    img {
      width: 180px;
      height: 56px;
    }

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
      margin-top: 40px;
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

  .forget__password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    span {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;

      color: #2d3748;
    }

    p {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      color: #2c5282;
      margin: 0;
    }
  }

  .forget__pass_dot {
    margin-right: -130px;
    background: #b76e79;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    margin-top: 5px;
  }

  .wrapper__footer {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-top: 110px;
    line-height: 16px;
    color: #616161;
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


  @media screen and (max-width: 992px) {
    .section-center {
      width: 90vw;
    }
  }
  @media screen and (max-width: 414px) {
    .section-center {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .section-center {
      width: 100%;
    }
  }
`;

export default LoginPage;
