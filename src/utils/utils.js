export const calculateDeclination = (number) => {
  if (number === 1) {
    return "пересадка"
  } else if (number >= 2 && number < 5) {
    return "пересадки"
  } else {
    return "пересадок"
  }
}
