import React, { useState, useEffect } from "react";
import { API } from "../api-service"
import { useCookies } from "react-cookie"

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['mr-token'])
    const [isLoginView, setIsloginView] = useState(true);


    useEffect(() => {
        if (token['mr-token']) window.location.href = '/movies';
    }, [token])

    const loginClicked = () => {
        API.loginUser({ username, password })
            .then(resp => resp.token ? setToken('mr-token', resp.token) : '')
            .catch(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({ username, password })
            .then(() => loginClicked())
            .catch(error => console.log(error))
    }

    const isDisabled = username.length===0 || password.length===0;

    return (
        <div className="App">
            <header className="App-header">
                {isLoginView ? <h1>Login</h1> : <h1>Registet</h1>}
            </header>

            <div className='login-container'>

                <label htmlFor="username">Username</label> <br />
                <input id="username" type="text" placeholder="username" value={username}
                    onChange={evt => setUsername(evt.target.value)} /><br />

                <label htmlFor="password">password</label> <br />
                <input id="password" type="password" placeholder="password" value={password}
                    onChange={evt => setPassword(evt.target.value)} /><br />

                {isLoginView ?
                    <button onClick={loginClicked} disabled={isDisabled} >Login</button> :
                    <button onClick={registerClicked} disabled={isDisabled} >Register</button>
                }

                {isLoginView ?
                    <p onClick={() => setIsloginView(false)}>You don't have account? Register here!</p> :
                    <p onClick={() => setIsloginView(true)}>You already have and account? Login here!</p>

                }

            </div>



        </div>
    )
}

export default Auth;