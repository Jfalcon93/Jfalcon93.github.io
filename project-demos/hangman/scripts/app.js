const puzzleEl = document.querySelector('#puzzle')
const gameStatusEl = document.querySelector('#game-status')
const scoreEl = document.querySelector('#score')
let word

//puzzleEl.textContent = word.puzzle
//gameStatusEl.textContent = word.statusMessage
//console.log(word.status)
//
window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    word.guessLetter(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    gameStatusEl.textContent = word.statusMessage
    
    word.puzzle.split('').forEach((letter) => {
        letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    word = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//getPuzzle('2').then((puzzle) => {
//    console.log(puzzle)
//}).catch((err) => {
//    console.log(`Error: ${err}`)
//})

//getCurrentCountry().then((country) => {
//    console.log(country.name)
//}).catch((err) => {
//    console.log(err)
//})