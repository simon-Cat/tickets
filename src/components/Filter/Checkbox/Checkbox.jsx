import styles from "@/components/Filter/Checkbox/Checkbox.module.css"

const Checkbox = ({ param = null, label, selectHandler, id }) => {
  const selectCheckbox = () => {
    param !== null ? selectHandler(param) : selectHandler()
  }
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        onChange={selectCheckbox}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
