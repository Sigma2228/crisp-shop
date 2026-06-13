import { useContext, useState } from "react";
import React from "react"
import { LoginContext } from "../Context/LoginContext"

const Login = () => {

const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

const {login} = useContext(LoginContext)

   const handleSubmit = (e) => {
        e.preventDefault()
        login(username, password);
        console.log(username)
        
    }
    

    return (
     
        <>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>username is {username}</p>
        <p>password is {password}</p>
        <button type="submit">log in</button>
        </form>
        </>
    )
}
export default Login