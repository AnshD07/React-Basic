// custom hooks

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})  //! we necessary need to pass something data type in parentheses of useState()

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            // .then((res) => console.log(res[currency]))
            .then((res) => setData(res[currency]))

    }, [currency])  
    // console.log(data);
    return data 
}

// export {useCurrencyInfo};
export default useCurrencyInfo;
//! we can write like this default export for this one not use curly braces

