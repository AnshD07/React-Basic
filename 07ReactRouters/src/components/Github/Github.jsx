import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])
     
    return (
        <>
           <div className='flex items-center justify-center flex-col'>
           <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github Followers : {data.followers}
            </div>
            <img src={data.avatar_url} alt="git picture" width={300} className='rounded-full' />
                
           </div>
        </>
    )
}

export default Github


export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}