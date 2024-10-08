import React, { useId } from 'react'

//! parameter scops learn kru chhe ne broo 
function InputBox({
    label,
    amount,
    onAmountChange,  //! this both are function 
    onCurrencyChange,
    currencyOptions = [], //array of all currency
    selectCurrency = "usd", // default for not get app crash
    amountDisable = false,
    currencyDisable = false,
    placeholder,
    className = "",
}) {

    const amountInputId = useId()

    // console.log(amountInputId);

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    className="text-black/40 mb-2 inline-block"

                    htmlFor={amountInputId}
                >
                    {label}
                </label>

                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}
                    disabled={amountDisable}

                    id={amountInputId}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //! if you don't want to return any value then use () this
                //! if onAmountChange pass kru chhe ne check karva mate exist kre chhe ke nai
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-800 text-white cursor-pointer outline-none"

                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //pass the value in function
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        //! remember key in loop in React for Performance 
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
