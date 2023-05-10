export const getIndexNumber = (collection, query) => {
  if (collection && query) {
    let number = collection.map((item, index) => {
      let num
      if (item.value === query) {
        num = index
      }
      return num
    })
    number = number.filter(function (element) {
      return element !== undefined
    })

    return number[0]
  }
}

export const getOrdinalValue = (n) => {
  const suffixes = ["th", "st", "nd", "rd"]
  const mod100 = n % 100
  const suffix = suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0]
  return n + suffix
}
