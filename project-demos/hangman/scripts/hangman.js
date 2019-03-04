class Hangman {
    constructor (word, remainingGuess) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuess
        this.guessedLetters = []
        this.status = 'playing'
    }
    
    get puzzle() {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    
    guessLetter (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (isUnique){
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
    
    calculateStatus () {
        let finished = true
    
        this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            
            } else {
                finished = false
            } 
        })

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    
    get statusMessage () {
        let statusMessage = ''
    
        if (this.status === 'playing') {
            return `Guesses remaining: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was '${this.word.join('')}'`
        } else {
            return `Great work! You finished the puzzle.`
        }
    }
}
