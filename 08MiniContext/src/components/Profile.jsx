


import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    
    //todo step 3. Consume the Context in Components that Need the Data
    const { user } = useContext(UserContext)
    console.log(user);

    if (!user) return <div> Please Login</div>

    return (
        <>
        <div>Welcome {user.username}</div>
        {/* <div>{user.password}</div> */}
        </>
    )

}

export default Profile