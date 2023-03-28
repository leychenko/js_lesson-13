//================================= Задача 4 ====================================
// Задача 4.З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

  function revealLetter(word) {
    let letter = 0
    function counter() {
		return word.charAt(letter++)
	 }
	 return counter
  }


  function getCountLetter(word) {
	let counter = 0
	let getLetters = revealLetter(word)
	for (let i = 0; i < word.length; i++) {
	let resultLetter = getLetters()	
    let userLetter = prompt(`Слово "дім" англійською мовою \n Введіть ${i + 1} букву`)
	 if (userLetter.toUpperCase() === resultLetter.toUpperCase()) counter++
  }
  return counter
  }

const myWord = 'HOME'
const game = getCountLetter(myWord)

document.write(`<p>Кількість вгаданих букв - ${game}</p>`)