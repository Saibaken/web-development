import "../../stylesheets/LoginPage.css";

import { React, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Navigate } from "react-router-dom";

export default function RegPage() {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));
  
  const { t } = useTranslation('registr');

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
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
      field.setCustomValidity(t("errors.value_missing"));
    } else if (field.validity.tooShort) {
      field.setCustomValidity(t("errors.too_short_login"));
    } else if (field.validity.tooLong) {
      field.setCustomValidity(t("errors.too_long_login"));
    } else {
      field.setCustomValidity("");
    }
  };

  const emailValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity(t("errors.value_missing"));
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(t("errors.pattern_mismatch_email"));
    } else {
      field.setCustomValidity("");
    }
  };

  const confirmValidation = () => {
    if (passwordRef.current.value === confirmRef.current.value) {
      confirmRef.current.setCustomValidity("");
    } else {
      confirmRef.current.setCustomValidity(t("errors.password_repeat"));
    }
  };

  const passwordValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity(t("errors.value_missing"));
    } else if (field.validity.tooShort) {
      field.setCustomValidity(t("errors.too_short_password"));
    } else if (field.validity.tooLong) {
      field.setCustomValidity(t("errors.too_long_password"));
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(t("errors.pattern_mismatch_password"));
    } else {
      field.setCustomValidity("");
    }
    confirmValidation();
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let response = await fetch(process.env.REACT_APP_API_URL + "api/v1/auth/registration",
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
      alert(t("errors.email_exists"));
    else {
      let userInfo = await response.json();
      sessionStorage.setItem("id", JSON.stringify(userInfo.id));
      sessionStorage.setItem("userName", JSON.stringify(userInfo.userName));
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
          {t('registr.login')}
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
          {t('registr.email')}
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
          {t('registr.password')}
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
          {t('registr.confirm_pass')}
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
          value={t('registr.submit')}
          ref={buttonRef}
        ></input>
      </form>
    );
  else
    return (<Navigate replace to="/news" />);
}
