import { useCurrencyInfo } from "./hooks/useCurrencyinfo.js"


function Temp() {
    console.log("hi");

    useCurrencyInfo("inr")
    return (
        <>
            <h1>this is ansh</h1>
        </>
    )
}

export default Temp
