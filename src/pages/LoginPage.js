import { React, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../stylesheets/LoginPage.css";

export default function LoginPage() {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));
  const { t } = useTranslation('login');
  
  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
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
      field.setCustomValidity(t("errors.pattern_mismatch_email"));
    } else if (field.validity.valueMissing) {
      field.setCustomValidity(t("errors.value_missing"));
    } else {
      field.setCustomValidity("");
    }
  };

  const validatePassword = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity(t("errors.value_missing"));
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(t("errors.pattern_mismatch_password"));
    } else if (field.validity.tooShort) {
      field.setCustomValidity(t("errors.too_short"));
    } else {
      field.setCustomValidity("");
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let response = await fetch(process.env.REACT_APP_API_URL + "api/v1/auth/login",
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
      alert(t("errors.incorrect_login"))
    else {
      let userInfo = await response.json();
      sessionStorage.setItem("id", JSON.stringify(userInfo.id));
      sessionStorage.setItem("userName", JSON.stringify(userInfo.userName));
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
          {t("login.login")}
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
          {t("login.password")}
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
        <input type="submit" value={t("login.submit")}></input>
        <Link to="/registration">{t("login.create_an_account")}</Link>
      </form>
    );
  else
    return (<Navigate replace to="/news" />);
}
