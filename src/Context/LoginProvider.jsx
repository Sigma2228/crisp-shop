import React, { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggerIn] = useState(true)
    const [user, setUser] = useState(null)

    const login = (username, password) => {
        const credentials = { username,  password };
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })

            .then(response => response.json())
            .then(data => console.log(data));
        setIsLoggerIn(true)
        setUser(username)
    }
    const logout = () => {
        setIsLoggerIn(false)
        setUser(null)
    }


    return (
        <LoginContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}