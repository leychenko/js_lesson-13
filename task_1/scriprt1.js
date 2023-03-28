//================================= Задача 1 ====================================
// Задача 1. Нехай X0 = 1, xi-1 + 2*i, де i= 1,2,.... . Визначити X10. Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів.

const x = 10
const nElement = getElemN(x)
//Рекурсивний флгоритм
function getElemN(x) {
  if (x === 0) return 1
  else {
    return getElemN(x - 1) + 2 * x
  }
}
// Нерекурсивний алгоритм
const nElement2 = getElemN2(x)
function getElemN2(x) {
  let result = 1
  for (let i = 1; i <= x; i++) result += +2 * i
  return result
}
document.write(
  `<p>При використанні рекурсивного алгоритму X10 =<span>${nElement}</span></p>`
)
document.write(
  `<p>При використанні нерекурсивного алгоритму X10 =<span>${nElement2}</span></p>`
)

