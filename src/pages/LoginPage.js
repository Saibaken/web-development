import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import "../stylesheets/LoginPage.css"

export default function LoginPage() {

    let navigate = useNavigate()

    const validate = (e) => {
        const name = e.target.name

        switch (name) {
            case "login": validateLogin(e.target)
                break
            case "password": validatePassword(e.target)
                break
            default:
                return
        }
    }

    const validateLogin = (field) => {
        if (field.validity.typeMismatch) {
            field.setCustomValidity("Must be email")
        }
        else if (field.validity.valueMissing) {
            field.setCustomValidity("Must not be empty")
        }
        else {
            field.setCustomValidity("")
        }
    }

    const validatePassword = (field) => {
        if (field.validity.valueMissing) {
            field.setCustomValidity("Must not be empty")
        }
        else if (field.validity.patternMismatch) {
            field.setCustomValidity("A password must contain at least " +
                "1 lower case letter, 1 upper case letter and 1 number")
        }
        else if (field.validity.tooShort) {
            field.setCustomValidity("A password must contain at least 8 symbols long")
        }
        else {
            field.setCustomValidity("")
        }
    }

    const sendForm = (e) => {
        e.preventDefault()

        localStorage.setItem("id", JSON.stringify(v4()))
        navigate("/" + v4() + "/news")
    }

    return (
        <form className="login-form" onSubmit={(event) => sendForm(event)} onInput={(event) => validate(event)} >
            <label>
                Login
                <input required id="POST-login" type="email" name="login" />
            </label>
            <label>
                Password
                <input required id="POST-password" type="password" name="password"
                    minLength={8} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$" />
            </label>
            <input type="submit" value="Login"></input>
            <Link to="/registration">Create an account</Link>
        </form>
    )
}
