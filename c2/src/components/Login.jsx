import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext.js'

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] =useState('')

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
    }



    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder='username'
                value={username}
                onChange={(e)=> setUserName(e.target.value)}
                />
            {"  "}
            <input 
                type="text" 
                placeholder='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
