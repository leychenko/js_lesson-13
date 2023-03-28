//================================= Задача 2 ====================================
// Задача 2.  Нехай X0 = x1 = 1,xi = xi-1 + 2*Xi-2, де 2,3,.... . Визначити Xn . Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів.
const userValueXn = parseInt(prompt('Введіть число від 1-10','1'))
const getFactorial = factorial(userValueXn)
//Рекурсивний флгоритм
function factorial(x) {
	if(x === 0 || x === 1) return 1
	else{
		return factorial(x-1)+2*factorial(x-2)
	}
}
// Нерекурсивний алгоритм
const getFactorial2 = factorial2(userValueXn)
function factorial2(x) {
	if(x === 0 || x === 1)return 1
	else{
		 let f_x_0 = 1
		 let f_x_1  = 1
		 let f_x = 1
		for (let i = 2; i <=x; i++) {
			f_x = f_x_0 + 2*f_x_1
			f_x_1 = f_x_0
			f_x_0 = f_x
		}
		return f_x
	}
}
document.write(
  `<p>Введене число користувачем - <span>${userValueXn}</span></p>`
)
document.write(
  `<p>При використанні рекурсивного алгоритму Xn = <span>${getFactorial}</span></p>`
)
document.write(
  `<p>При використанні нерекурсивного алгоритму Xn = <span>${getFactorial2}</span></p>`
)




//=================================================================================
 
