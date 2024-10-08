import React from 'react'

// function Card(props) {
//     // console.log(props); //! here props had empty object if we did't pass anything to here

//     console.log(props.name);
//     console.log(props.myArr);
//     return (
//         <div className="relative h-[400px] w-[300px] rounded-md">
//             <img
//                 src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
//                 alt="AirMax Pro"
//                 className="z-0 h-full w-full rounded-md object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//             <div className="absolute bottom-4 left-4 text-left">
//                 <h1 className="text-lg font-semibold text-white">{props.name}</h1>
//                 <p className="mt-2 text-sm text-gray-300">
//                     {props.anotherObj.username} is my brother. and his networth is {props.anotherObj.networth}
//                 </p>
//                 <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//                     View Profile →
//                 </button>
//             </div>
//         </div>
//     )
// }

/*
! upper is example when we pass props we need to take it form
* props.value props is object 
! if Props not pass than default value or text is always there set by me
*/
function Card({
    name,
    btnText = "default value because varible not pass"
}) {   //! we can also directly parse varible from empty props obj okay
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {name} is my brother. and his networth is {name}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btnText} →
                </button>
            </div>
        </div>
    )
}

export default Card