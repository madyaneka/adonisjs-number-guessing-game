'use strict'

class GameController {

    render ({ request, view }) {
        // get number from the url query string
        const guessedNumber = Number(request.input('number'))

        // generate a random number
        const randomNumber = Math.floor(Math.random() * 20 ) + 1

        // rendering view
        return view.render('game', {guessedNumber, randomNumber})
    }
    
}

module.exports = GameController
