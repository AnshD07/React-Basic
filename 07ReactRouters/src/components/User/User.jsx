import React, { useInsertionEffect } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    //todo ==> extracting varible from Hooks
    const { params } = useParams()  //! for getting params from url like
    //! here last number is params ==>  http://localhost:5173/user/100100101
    return (
        <div
            className='text-3xl text-center bg-black text-white border'
        >User : {params}  </div>
    )
}

export default User