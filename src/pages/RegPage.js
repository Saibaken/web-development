import { React, useState, useRef, useEffect } from "react";
import "../stylesheets/LoginPage.css";
import classNames from "classnames";
export default function RegPage() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const passwordRef = useRef();
  const confirmRef = useRef();

  const emailErrorClass = classNames({
    errorMessage: emailDirty || emailError,
    noError: !emailError,
  });
  const passwordErrorClass = classNames({
    errorMessage: passwordDirty || passwordError,
    noError: !passwordError,
  });
  const confirmErrorClass = classNames({
    errorMessage: confirmDirty || confirmError,
    noError: !confirmError,
  });
  const loginErrorClass = classNames({
    errorMessage: loginDirty || loginError,
    noError: !loginError,
  });

  useEffect(() => {
    if (loginError || emailError || passwordError || confirmError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, emailError, passwordError, confirmError]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    const loginRegex = /([a-z0-9]{4,20})\w+/gi;
    if (!loginRegex.test(String(e.target.value).toLowerCase())) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(String(e.target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    confirmValidation();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/;
    if (!passwordRegex.test(String(e.target.value).toLowerCase())) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const confirmValidation = () => {
    if (passwordRef.current.value == confirmRef.current.value) {
      setConfirmError(false);
    } else {
      setConfirmError(true);
    }
  };

  const confirmHandler = (e) => {
    setConfirm(e.target.value);
    confirmValidation();
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "confirm":
        setConfirmDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <form className="login-form register">
      <label>
        Login
        <input
          id="POST-login"
          type="text"
          name="login"
          value={login}
          onChange={(e) => loginHandler(e)}
        />
      </label>
      <span className={loginErrorClass}>
        {" "}
        Login must be 4-20 characters long{" "}
      </span>
      <label>
        E-mail
        <input
          onBlur={(e) => blurHandler(e)}
          id="POST-email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => emailHandler(e)}
        />
      </label>
      <span className={emailErrorClass}> Incorrect email address </span>
      <label>
        Password
        <input
          onBlur={(e) => blurHandler(e)}
          id="POST-password"
          type="password"
          name="password"
          value={password}
          ref={passwordRef}
          onChange={(e) => passwordHandler(e)}
        />
      </label>
      <span className={passwordErrorClass}>
        {" "}
        Password should contain minimum eight characters, at least one letter
        and one number{" "}
      </span>
      <label>
        Confirm password
        <input
          onBlur={(e) => blurHandler(e)}
          id="POST-password-confirm"
          type="password"
          name="password-confirm"
          value={confirm}
          ref={confirmRef}
          onChange={(e) => confirmHandler(e)}
        />
      </label>
      <span className={confirmErrorClass}> Passwords should be the same </span>
      <input disabled={!formValid} type="submit" value="Register"></input>
    </form>
  );
}
