import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    return (
        <>
            <h1>this is custom function</h1>
        </>
    )
}

const ReactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to go to the google bhaiya"
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const varible = "click to visit google this is in the varible   "
const reactElement = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: "_blank"
    },
   varible
)

ReactDOM.createRoot(document.getElementById('root')).render(


    // MyApp()  // at the end this is function so can write like this but this is bad practice

    // <MyApp />

    // ReactElement
 
    reactElement

    // <App />
)
