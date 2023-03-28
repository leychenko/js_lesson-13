//================================= Задача 5 ====================================
// Задача 5. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.


function getRandomNum(minV,maxV) {
	return minV + Math.floor(Math.random() * maxV - minV + 1)
}

const answerInterval = getAnswerInterval(10000, getRandomNum,1,10)

function getAnswerInterval(delay,randomNumber,minV,maxV) {
	
	setInterval(()=>{
		const randomNum = randomNumber(minV, maxV)
		const randomNum2 = randomNumber(minV, maxV)
		const result = randomNum + randomNum2
		const qustionUser = parseInt(prompt(`Дайте відповідь скільки буде ${randomNum} + ${randomNum2}`))
		if(qustionUser === result)
		alert('Ви відповіли правильно')
		else alert("Відплвідь не вірна")
	},delay)

}
