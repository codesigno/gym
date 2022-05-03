import React, { useState } from 'react'
import gymMan from '../assets/men-figur.png'
import '../style/signupLogin.css'

export default function SignUp() {
    const [isRegister, setIsRegister] = useState(false)

    const toggleOption = () => {
        setIsRegister(!isRegister)
    }

    return (
        <div className="sign-up-login">
            <div className="connect">
                <img src={gymMan} alt="gym man" width="300" />
                <h2 className>
                    {!isRegister && "active" ?
                        <p>Sign Up</p>
                        : <p>Login</p>
                    }
                </h2>
            </div>
            <div className="sign-up-form">
                <div className="options">
                    <h3 onClick={toggleOption} className={!isRegister && "active"}>Sign Up</h3>
                    <h3 onClick={toggleOption} className={isRegister && "active"}>Login</h3>
                </div>
                {!isRegister ? (
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Signup</button>
                    </form>
                ) : (
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        </div>
    )
}
