export const getTotalAmount = list => {
  if (!list) return 0
  let total = 0
  list.map(item => {
    total += Number(item.value)
  })

  return total.toFixed(2)
}
