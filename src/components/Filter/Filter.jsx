import styles from "@/components/Filter/Filter.module.css"
import { calculateDeclination } from "@/utils/utils"
import { useState } from "react"
import Checkbox from "@/components/Filter/Checkbox/Checkbox"

export default function Filter({ params, selectFilterParamHandler, classModifier = "" }) {
  const [ isAllFilterParamsSelected, setIsAllFilterParamsSelected ] = useState(false)

  const selectAllFilterParams = () => {
    const filterCheckboxes = document.querySelectorAll(`.${styles.checkbox} input`)
    
    filterCheckboxes.forEach((filterCheckbox) => {
      filterCheckbox.checked = !isAllFilterParamsSelected ? true : false
    })

    if(!isAllFilterParamsSelected) {
      setIsAllFilterParamsSelected(true)
      selectFilterParamHandler([...params])
    } else {
      setIsAllFilterParamsSelected(false)
      selectFilterParamHandler([])
    }
  }

  const selectFilterParam = (filterParam) => {
    if(isAllFilterParamsSelected) {
      document.querySelector('#checkboxAllValues').checked = false
      setIsAllFilterParamsSelected(false)
    }

    selectFilterParamHandler(filterParam)
  }

  const calculateCheckboxLabel = (param) => {
    const label = `${param ? param : "Без пересадок"} ${param !== 0 ? calculateDeclination(param) : ''}`
    return label
  }
 
  return (
    <section className={`${styles.filter} ${classModifier}`}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <ul className={styles.checkboxes}>
        <li className={styles.checkbox}>
          <Checkbox 
            label={'Все'}
            id={'checkboxAllValues'}
            selectHandler={selectAllFilterParams}
          />
        </li>
        {
          params.map((param) => (
            <li key={param} className={styles.checkbox}>
              <Checkbox
                param={param}
                label={calculateCheckboxLabel(param)}
                id={`checkboxValue_${param}`}
                selectHandler={selectFilterParam}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}