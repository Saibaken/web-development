import { React, useRef, useEffect, useState } from "react";
import "../stylesheets/LoginPage.css";
import { useNavigate, Navigate } from "react-router-dom";

export default function RegPage() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  let navigate = useNavigate();

  const passwordRef = useRef();
  const confirmRef = useRef();
  const loginRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();
  const buttonRef = useRef();

  const validate = (e) => {
    const name = e.target.name;
    switch (name) {
      case "login":
        loginValidityHandler(e.target);
        break;
      case "password":
        passwordValidityHandler(e.target);
        break;
      case "email":
        emailValidityHandler(e.target);
        break;
      case "password-confirm":
        confirmValidation();
        break;
      default:
        break;
    }
    if (buttonEnabled()) {
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  };

  const loginValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Login field must not be empty");
    } else if (field.validity.tooShort) {
      field.setCustomValidity("Login should be >4 letters");
    } else if (field.validity.tooLong) {
      field.setCustomValidity("Login should be <20 letters");
    } else {
      field.setCustomValidity("");
    }
  };

  const emailValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Email must not be empty");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity("This is not an email address!");
    } else {
      field.setCustomValidity("");
    }
  };

  const confirmValidation = () => {
    if (passwordRef.current.value === confirmRef.current.value) {
      confirmRef.current.setCustomValidity("");
    } else {
      confirmRef.current.setCustomValidity(
        "Passwords should be the same!"
      );
    }
  };

  const passwordValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Password field must not be empty");
    } else if (field.validity.tooShort) {
      field.setCustomValidity("Password should be >8 letters");
    } else if (field.validity.tooLong) {
      field.setCustomValidity("Password should be <25 letters");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(
        "Password should contain at least 1 letter and 1 number"
      );
    } else {
      field.setCustomValidity("");
    }
    confirmValidation();
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: emailRef.current.value,
          userName: loginRef.current.value,
          password: passwordRef.current.value
        })
      });

    if (!response.ok)
      alert("Пользователь с таким email уже существует");
    else {
      let userInfo = await response.json();
      localStorage.setItem("id", JSON.stringify(userInfo.id));
      localStorage.setItem("userName", JSON.stringify(userInfo.userName));
      navigate("/news");
    }
  };

  const buttonEnabled = () => {
    return (
      loginRef.current.validity.valid &&
      emailRef.current.validity.valid &&
      passwordRef.current.validity.valid &&
      confirmRef.current.validity.valid
    );
  };

  if (id === null)
    return (
      <form
        className="login-form register"
        onSubmit={(e) => sendForm(e)}
        ref={formRef}
        onInput={(e) => validate(e)}
      >
        <label>
          Login
          <input
            id="POST-login"
            type="text"
            name="login"
            required
            minLength={4}
            maxLength={20}
            ref={loginRef}
          />
        </label>
        <label>
          E-mail
          <input
            id="POST-email"
            type="text"
            name="email"
            required
            pattern="^\S+@\S+\.\S+$"
            ref={emailRef}
          />
        </label>
        <label>
          Password
          <input
            id="POST-password"
            type="password"
            name="password"
            required
            minLength={8}
            maxLength={25}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$"
            ref={passwordRef}
          />
        </label>
        <label>
          Confirm password
          <input
            id="POST-password-confirm"
            type="password"
            name="password-confirm"
            required
            ref={confirmRef}
          />
        </label>
        <input
          disabled={true}
          type="submit"
          value="Register"
          ref={buttonRef}
        ></input>
      </form>
    );
  else
    return (<Navigate replace to="/news" />);
}
