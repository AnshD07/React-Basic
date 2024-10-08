import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //todo step 3. Consume the Context in Components that Need the Data

    //! because at provider value is object passed so extract setUser from object okay
    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password }) //! user data is object format  
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            {" "}
            <input value={password} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login