import { useEffect, useState } from 'react'
import { InputBox } from './components'  //! by defalt index.js called
import useCurrencyInfo from "./hooks/useCurrencyinfo.js"

function App() {
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const optionsArr = Object.keys(currencyInfo)
  // console.log(optionsArr)

  const swap = () => {
    setTo(from)
    setFrom(to)

    // setConvertedAmount(amount)
    // setamount(convertedAmount)
  }


  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(() => {
    convert()
  }, [amount, swap, from, to])

  //! to write javascript in html here we use { } this is called jsx 
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundColor: 'black' }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}

                currencyOptions={optionsArr}
                onCurrencyChange={(currencyName) => setFrom(currencyName)}//! arrow function take argument come from Inputbox.jsx components that is user input smjanu this is game of function arrow function ma argument Inputbox.jsx mathi avu chhe
                selectCurrency={from}
                onAmountChange={(amount) => (setamount(amount))}  //* value come from InputBox Components that are taken in argument of arrow method

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                onClick={swap}  //! only give referance of function not () aside okay than function call automatically
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                placeholder={"Converted Amount"}
                amountDisable={true}

                amount={convertedAmount}
                currencyOptions={optionsArr}
                onCurrencyChange={(currencyName) => setTo(currencyName)}
                selectCurrency={to}
              />
            </div>
            <div type="submit" className="w-full bg-orange-700 text-2xl text-white px-4 py-3 rounded-lg text-center">
              {from.toUpperCase()} To {to.toUpperCase()} Currency Converted ..
            </div>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default App
