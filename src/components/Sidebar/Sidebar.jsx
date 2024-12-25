import styles from "@/components/Sidebar/Sidebar.module.css"
import CurrencySwitcher from "@/components/CurrencySwitcher/CurrencySwitcher"
import Filter from "@/components/Filter/Filter"

export default function Sidebar({
  currencies,
  availableFilters,
  selectFilterParamHandler,
  classModifier = "",
}) {
  return (
    <div className={`${styles.sidebar} ${classModifier}`}>
      <CurrencySwitcher currencies={currencies} />
      <Filter
        params={availableFilters}
        selectFilterParamHandler={selectFilterParamHandler}
      />
    </div>
  )
}