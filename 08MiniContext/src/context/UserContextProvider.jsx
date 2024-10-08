
//todo==> step 2. Provide the Context to the component tree threw provider

import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({ children }) {
    //! here argument can be anything like value or element

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>  {/* //! passing object to value*/}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider