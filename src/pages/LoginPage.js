import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../stylesheets/LoginPage.css'

export default function LoginPage() {

    let navigate = useNavigate();

    // TODO: Написать валидацию полей
    function validate() {
        let login = document.getElementById('POST-login').value;

        if (login !== null) {
            localStorage.setItem("id", JSON.stringify(login))
            navigate("/" + login + "/news");
        }
    }

    return (
        <form className='login-form' onSubmit={validate}>
            <label>
                Login
                <input id='POST-login' type='text' name='login' />
            </label>
            <label>
                Password
                <input id='POST-password' type='password' name='password' />
            </label>
            <input type='submit' value='Login'></input>
            <Link to='/registration'>Create an account</Link>
        </form>
    )
}
