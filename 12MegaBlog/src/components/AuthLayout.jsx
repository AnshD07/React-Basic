import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


//* second argument given by the user
export default function Protected({ children, authentication = true }) {  //! we can change function name 
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status) //* get status from app


    useEffect(() => {

        //TODO: make it more easy to understand
        // if (authStatus === true) {
        //     navigate('/')
        // } else if (authStatus === false) {
        //     navigate('/login')
        // }

        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)

    }, [authStatus, navigate, authentication])

    return
}

