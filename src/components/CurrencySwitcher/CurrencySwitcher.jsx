import styles from "@/components/CurrencySwitcher/CurrencySwitcher.module.css"
import { useState } from "react"

const CurrencyElement = ({ value }) => {
  const [ isCurrencySelected, setIsCurrencySelected ] = useState(false)
  const selectCurrency = () => {
    setIsCurrencySelected(!isCurrencySelected)
  }

  return (
    <li
      className={`${styles.currency} ${isCurrencySelected ? styles.currency_selected : ""}`}
      onClick={selectCurrency}  
    >
      {value}
    </li>
  )
}

const CurrencySwitcher = ({ currencies, classModifier = "" }) => {
  return (
    <article className={`${styles.currencySwitcher} ${classModifier}`}>
      <h2 className={styles.title}>Валюта</h2>
      <ul className={styles.currencies}>
        {currencies.map((currency) => (
          <CurrencyElement
            key={currency.id}
            value={currency.value} 
          />
        ))}
      </ul>
    </article>
  )
}

export default CurrencySwitcher
