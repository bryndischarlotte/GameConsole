const Game = require('./game');
let counter = 0;

// Created player class
// Created square class
// Created board class
// Created game class
// Input function
// makeMove function
// changePlayer function
// checkWinner
// stopGame

function TicTacToe() {
    var game = new Game();
    console.log(game);

    // Read input 
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var recursiveAsyncReadLine = function () {
        rl.question('Input the number of your square: ', (answer) => {
            if (answer === 'exit')
                return rl.close();
            var squareID = answer.split('');
            console.log(squareID);
            var row = parseInt(squareID[0]);
            var col = parseInt(squareID[1]);
            console.log(typeof row);
            console.log(typeof col);
            console.log('You have selected: "', answer, '"');

            // Player move 
            if(game.board.grid[row][col].makeMove(counter) === true) {
                changePlayer(); 
            }
            else {
                game.board.grid[row][col].makeMove(counter);
            }
            console.log("It's your turn: " + game.players[counter].symbol);
            console.log(game.board.grid);
            game.countMoves();
            game.checkWinner();

            if (game.gameStatus === true) {
                recursiveAsyncReadLine();
            }
        });
    };
    recursiveAsyncReadLine();
}
function changePlayer() {
    if(counter === 0) {
        counter = 1; 
    }
    else {
        counter = 0; 
    }
}

TicTacToe();
// Do you want to play again? 

module.exports = TicTacToe; 