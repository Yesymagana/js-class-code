// core javascript concepts
// 20/80 rule

// 0. PLAN!!

// 1. variables
    // === nicknames for data

// 2. data types
    // === strings, numbers, booleans, arrays, objects
// 2a. everything is an object
// 2b. elements are objects

// (Strings & Arrays are objects == both have their own methods that we would need to look into and learn. Numbers & booleans are intuitive and pretty straight-forward)

    // methods for strings & arrays:

        // array methods that are super useful
            // .splice()
            // .push()
            // .pop()
            // .shift()
            // .unshift()
            // .slice()
            // .filter()
            // .map()
            // .sort()
            // .reverse()
            // .every()
            // .some()

// 3. functions (anything we do should be in a function)
    // reusable code
    // readibility
// 3a. scope
    // where variables are available

// 4. elements
    // a. create
    // b. select
    // c. modify
    // d. delete

// 5. events
    // a. listen
    // b. trigger functions

// 6. loops
    // a. for
    // b. while
    // for each [array]

// 7. conditionals
    // a. if
    // b. else
    // c. else if
    // d. switch
    // e. ternary

// 8. classes
    // a. constructor
    // b. methods
    // c. properties

// 9. fetch
    // a. get
    // b. post

// 10. regex
    // regexr.com


// ----------------------------------------------------------------------

// Connect 4 Game:

// 2 players
// take turns
// droppping a piece
// into a column (6x7)
// check for win

import { createColumnElement } from './column.js';


for(let i = 0; i < 7; i++){
    createColumnElement(i);
}

// class code below:

// const column1 = [];
// const column2 = [];
// const column3 = [];
// const column4 = [];
// const column5 = [];
// const column6 = [];
// const column7 = [];

// const player1 = 'red';
// const player2 = 'yellow';

// let turn = player1;

// function createColumnRowElement(column, i) {
//     const columnRow = document.createElement('div');
//     column.appendChild(columnRow);
//     columnRow.classList.add('column-row');
//     columnRow.innerText = i;
//     columnRow.classList.add('row-' + i)    

//     if (i === 0) {
//         columnRow.addEventListener('click', function(){
//             if (!column.querySelector('.row-5').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-5'));
//             } else if (!column.querySelector('.row-4').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-4'));
//             } else if (!column.querySelector('.row-3').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-3'));
//             } else if (!column.querySelector('.row-2').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-2'));
//             } else if (!column.querySelector('.row-1').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-1'));
//             } else if (!column.querySelector('.row-0').classList.contains('full')) {
//                 createPiece(turn, column.querySelector('.row-0'));
//             } else {
//                 console.log('column is full');
//             }
            

//             if (turn === player1) {
//                 turn = player2;
//             } else {
//                 turn = player1;
//             }
//         })
//     }
// }

// function createColumnElement() {
//     const column = document.createElement('div');
//     document.body.appendChild(column);
//     column.classList.add('column');
//     for (let i = 0; i < 6; i++) {
//     createColumnRowElement(column, i);
//     }
// }

// for (let i = 0; i < 7; i++) {
//     createColumnElement();
// }

// function createPiece(color, columnRow) {
//     const piece = document.createElement('div');
//     columnRow.appendChild(piece);
//     piece.classList.add('piece');
//     piece.classList.add(color);
//     columnRow.classList.add('full');
// }