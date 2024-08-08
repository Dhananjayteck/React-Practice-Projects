import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
  // convert,
}) => {
  // useId is a hook use to generate the unique Id
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg  flex ${className}`}>
      <div className="w-1-2">
        <label
          htmlFor={id}
          className="text-left w-full text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          type="number"
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          min="0"
          onChange={(e) => {
            const value = e.target.value;
            if (!isNaN(value) && value.trim() !== "" && value >= 0) {
              onAmountChange && onAmountChange(value);
            } else if (value === "") {
              onAmountChange && onAmountChange("");
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {" "}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
