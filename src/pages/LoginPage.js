import { React, useRef, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../stylesheets/LoginPage.css";

export default function LoginPage() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  let navigate = useNavigate();
  const loginRef = useRef();
  const passRef = useRef();

  const validate = (e) => {
    const name = e.target.name;

    switch (name) {
      case "login":
        validateLogin(e.target);
        break;
      case "password":
        validatePassword(e.target);
        break;
      default:
        return;
    }
  };

  const validateLogin = (field) => {
    if (field.validity.patternMismatch) {
      field.setCustomValidity("Must be email");
    } else if (field.validity.valueMissing) {
      field.setCustomValidity("Must not be empty");
    } else {
      field.setCustomValidity("");
    }
  };

  const validatePassword = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Must not be empty");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(
        "A password must contain at least " +
        "1 lower case letter, 1 upper case letter and 1 number"
      );
    } else if (field.validity.tooShort) {
      field.setCustomValidity(
        "A password must contain at least 8 symbols long"
      );
    } else {
      field.setCustomValidity("");
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: loginRef.current.value,
          password: passRef.current.value
        })
      });

    if (!response.ok)
      alert("Неправильное имя пользователя или пароль")
    else {
      let userInfo = await response.json();
      localStorage.setItem("id", JSON.stringify(userInfo.id));
      localStorage.setItem("userName", JSON.stringify(userInfo.userName));
      navigate("/news");
    }
  };

  if (id === null)
    return (
      <form
        className="login-form"
        onSubmit={(event) => sendForm(event)}
        onInput={(event) => validate(event)}
      >
        <label>
          Login
          <input
            required
            id="POST-login"
            type="text"
            pattern="^\S+@\S+\.\S+$"
            name="login"
            ref={loginRef}
          />
        </label>
        <label>
          Password
          <input
            required
            id="POST-password"
            type="password"
            name="password"
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$"
            ref={passRef}
          />
        </label>
        <input type="submit" value="Login"></input>
        <Link to="/registration">Create an account</Link>
      </form>
    );
  else
      return(<Navigate replace to = "/news"/>);
}
