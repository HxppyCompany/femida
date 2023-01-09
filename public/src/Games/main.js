if ('function' === typeof importScripts) {
    importScripts("public/src/Games/minesweeper.js");
    importScripts("public/src/Games/startms.js");
    addEventListener('message', onMessage);

    function onMessage(e) {
        console.log('123');
    }
}

// let img = document.getElementById('i1');
// img.addEventListener("click", function () {
//     if (visibleboard[0][0] == 'b') {
//         document.getElementById('i1').src = "img/bomb.png";
//     }
//     if (visibleboard[0][0] == 0) {
//         document.getElementById('i1').src = "img/empty.png";
//     }
//     if (visibleboard[0][0] == 1) {
//         document.getElementById('i1').src = "img/empty.png";
//     }
//     if (visibleboard[0][0] == 2) {
//         document.getElementById('i1').src = "img/empty.png";
//     }
// })


let s = document.getElementById('start_button');
s.addEventListener("click", function () {
    console.clear()
    console.log('start the game!');
    let output = startms()
    board = output[1]
    visibleboard = output[2]
    freeCells = output[3]
    bombCells = output[4]
    score = output[5]
    placeFlag = output[6]


})

let f = document.getElementById('flag_mode');
f.addEventListener("click", function () {
    placeFlag = Flagmode(placeFlag)

})

{
    let b1 = document.getElementById('b1');
    b1.addEventListener('click', function () {
        let output = turn('0 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b2 = document.getElementById('b2');
    b2.addEventListener('click', function () {
        input = '0 1';
        let output = turn('0 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b3 = document.getElementById('b3');
    b3.addEventListener('click', function () {
        input = '0 2';
        let output = turn('0 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b4 = document.getElementById('b4');
    b4.addEventListener('click', function () {
        input = '0 3';
        let output = turn('0 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b5 = document.getElementById('b5');
    b5.addEventListener('click', function () {
        input = '0 4';
        let output = turn('0 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b6 = document.getElementById('b6');
    b6.addEventListener('click', function () {
        input = '0 5';
        let output = turn('0 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b7 = document.getElementById('b7');
    b7.addEventListener('click', function () {
        input = '0 6';
        let output = turn('0 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b8 = document.getElementById('b8');
    b8.addEventListener('click', function () {
        input = '0 7';
        let output = turn('0 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b9 = document.getElementById('b9');
    b9.addEventListener('click', function () {
        input = '0 8';
        let output = turn('0 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 1*/
{
    let b10 = document.getElementById('b10');
    b10.addEventListener('click', function () {
        input = '1 0';
        let output = turn('1 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b11 = document.getElementById('b11');
    b11.addEventListener('click', function () {
        input = '1 1';
        let output = turn('1 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b12 = document.getElementById('b12');
    b12.addEventListener('click', function () {
        input = '1 2';
        let output = turn('1 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b13 = document.getElementById('b13');
    b13.addEventListener('click', function () {
        input = '1 3';
        let output = turn('1 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b14 = document.getElementById('b14');
    b14.addEventListener('click', function () {
        input = '1 4';
        let output = turn('1 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b15 = document.getElementById('b15');
    b15.addEventListener('click', function () {
        input = '1 5';
        let output = turn('1 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b16 = document.getElementById('b16');
    b16.addEventListener('click', function () {
        input = '1 6';
        let output = turn('1 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b17 = document.getElementById('b17');
    b17.addEventListener('click', function () {
        input = '1 7';
        let output = turn('1 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b18 = document.getElementById('b18');
    b18.addEventListener('click', function () {
        input = '1 8';
        let output = turn('1 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 2*/
{
    let b19 = document.getElementById('b19');
    b19.addEventListener('click', function () {
        input = '2 0';
        let output = turn('2 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b20 = document.getElementById('b20');
    b20.addEventListener('click', function () {
        input = '2 1';
        let output = turn('2 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b21 = document.getElementById('b21');
    b21.addEventListener('click', function () {
        input = '2 2';
        let output = turn('2 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b22 = document.getElementById('b22');
    b22.addEventListener('click', function () {
        input = '2 3';
        let output = turn('2 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b23 = document.getElementById('b23');
    b23.addEventListener('click', function () {
        input = '2 4';
        let output = turn('2 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b24 = document.getElementById('b24');
    b24.addEventListener('click', function () {
        input = '2 5';
        let output = turn('2 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b25 = document.getElementById('b25');
    b25.addEventListener('click', function () {
        input = '2 6';
        let output = turn('2 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b26 = document.getElementById('b26');
    b26.addEventListener('click', function () {
        input = '2 7';
        let output = turn('2 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b27 = document.getElementById('b27');
    b27.addEventListener('click', function () {
        input = '2 8';
        let output = turn('2 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 3*/
{
    let b28 = document.getElementById('b28');
    b28.addEventListener('click', function () {
        input = '3 0';
        let output = turn('3 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b29 = document.getElementById('b29');
    b29.addEventListener('click', function () {
        input = '3 1';
        let output = turn('3 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b30 = document.getElementById('b30');
    b30.addEventListener('click', function () {
        input = '3 2';
        let output = turn('3 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b31 = document.getElementById('b31');
    b31.addEventListener('click', function () {
        input = '3 3';
        let output = turn('3 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b32 = document.getElementById('b32');
    b32.addEventListener('click', function () {
        input = '3 4';
        let output = turn('3 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b33 = document.getElementById('b33');
    b33.addEventListener('click', function () {
        input = '3 5';
        let output = turn('3 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b34 = document.getElementById('b34');
    b34.addEventListener('click', function () {
        input = '3 6';
        let output = turn('3 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b35 = document.getElementById('b35');
    b35.addEventListener('click', function () {
        input = '3 7';
        let output = turn('3 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b36 = document.getElementById('b36');
    b36.addEventListener('click', function () {
        input = '3 8';
        let output = turn('3 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 4*/
{
    let b37 = document.getElementById('b37');
    b37.addEventListener('click', function () {
        input = '4 0';
        let output = turn('4 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b38 = document.getElementById('b38');
    b38.addEventListener('click', function () {
        input = '4 1';
        let output = turn('4 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b39 = document.getElementById('b39');
    b39.addEventListener('click', function () {
        input = '4 2';
        let output = turn('4 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b40 = document.getElementById('b40');
    b40.addEventListener('click', function () {
        input = '4 3';
        let output = turn('4 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b41 = document.getElementById('b41');
    b41.addEventListener('click', function () {
        input = '4 4';
        let output = turn('4 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b42 = document.getElementById('b42');
    b42.addEventListener('click', function () {
        input = '4 5';
        let output = turn('4 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b43 = document.getElementById('b43');
    b43.addEventListener('click', function () {
        input = '4 6';
        let output = turn('4 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b44 = document.getElementById('b44');
    b44.addEventListener('click', function () {
        input = '4 7';
        let output = turn('4 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b45 = document.getElementById('b45');
    b45.addEventListener('click', function () {
        input = '4 8';
        let output = turn('4 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 5*/
{
    let b46 = document.getElementById('b46');
    b46.addEventListener('click', function () {
        input = '5 0';
        let output = turn('5 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b47 = document.getElementById('b47');
    b47.addEventListener('click', function () {
        input = '5 1';
        let output = turn('5 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b48 = document.getElementById('b48');
    b48.addEventListener('click', function () {
        input = '5 2';
        let output = turn('5 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b49 = document.getElementById('b49');
    b49.addEventListener('click', function () {
        input = '5 3';
        let output = turn('5 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b50 = document.getElementById('b50');
    b50.addEventListener('click', function () {
        input = '5 4';
        let output = turn('5 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b51 = document.getElementById('b51');
    b51.addEventListener('click', function () {
        input = '5 5';
        let output = turn('5 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b52 = document.getElementById('b52');
    b52.addEventListener('click', function () {
        input = '5 6';
        let output = turn('5 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b53 = document.getElementById('b53');
    b53.addEventListener('click', function () {
        input = '5 7';
        let output = turn('5 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b54 = document.getElementById('b54');
    b54.addEventListener('click', function () {
        input = '5 8';
        let output = turn('5 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 6*/
{
    let b55 = document.getElementById('b55');
    b55.addEventListener('click', function () {
        input = '6 0';
        let output = turn('6 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b56 = document.getElementById('b56');
    b56.addEventListener('click', function () {
        input = '6 1';
        let output = turn('6 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)

    })
    let b57 = document.getElementById('b57');
    b57.addEventListener('click', function () {
        input = '6 2';
        let output = turn('6 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b58 = document.getElementById('b58');
    b58.addEventListener('click', function () {
        input = '6 3';
        let output = turn('6 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b59 = document.getElementById('b59');
    b59.addEventListener('click', function () {
        input = '6 4';
        let output = turn('6 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b60 = document.getElementById('b60');
    b60.addEventListener('click', function () {
        input = '6 5';
        let output = turn('6 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b61 = document.getElementById('b61');
    b61.addEventListener('click', function () {
        input = '6 6';
        let output = turn('6 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b62 = document.getElementById('b62');
    b62.addEventListener('click', function () {
        input = '6 7';
        let output = turn('6 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b63 = document.getElementById('b63');
    b63.addEventListener('click', function () {
        input = '6 8';
        let output = turn('6 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 7*/
{
    let b64 = document.getElementById('b64');
    b64.addEventListener('click', function () {
        input = '7 0';
        let output = turn('7 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b65 = document.getElementById('b65');
    b65.addEventListener('click', function () {
        input = '7 1';
        let output = turn('7 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b66 = document.getElementById('b66');
    b66.addEventListener('click', function () {
        input = '7 2';
        let output = turn('7 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b67 = document.getElementById('b67');
    b67.addEventListener('click', function () {
        input = '7 3';
        let output = turn('7 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b68 = document.getElementById('b68');
    b68.addEventListener('click', function () {
        input = '7 4';
        let output = turn('7 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b69 = document.getElementById('b69');
    b69.addEventListener('click', function () {
        input = '7 5';
        let output = turn('7 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b70 = document.getElementById('b70');
    b70.addEventListener('click', function () {
        input = '7 6';
        let output = turn('7 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b71 = document.getElementById('b71');
    b71.addEventListener('click', function () {
        input = '7 7';
        let output = turn('7 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b72 = document.getElementById('b72');
    b72.addEventListener('click', function () {
        input = '7 8';
        let output = turn('7 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 8*/
{
    let b73 = document.getElementById('b73');
    b73.addEventListener('click', function () {
        input = '8 0';
        let output = turn('8 0', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b74 = document.getElementById('b74');
    b74.addEventListener('click', function () {
        input = '8 1';
        let output = turn('8 1', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b75 = document.getElementById('b75');
    b75.addEventListener('click', function () {
        input = '8 2';
        let output = turn('8 2', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b76 = document.getElementById('b76');
    b76.addEventListener('click', function () {
        input = '8 3';
        let output = turn('8 3', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b77 = document.getElementById('b77');
    b77.addEventListener('click', function () {
        input = '8 4';
        let output = turn('8 4', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b78 = document.getElementById('b78');
    b78.addEventListener('click', function () {
        input = '8 5';
        let output = turn('8 5', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b79 = document.getElementById('b79');
    b79.addEventListener('click', function () {
        input = '8 6';
        let output = turn('8 6', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b80 = document.getElementById('b80');
    b80.addEventListener('click', function () {
        input = '8 7';
        let output = turn('8 7', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
    let b81 = document.getElementById('b81');
    b81.addEventListener('click', function () {
        input = '8 8';
        let output = turn('8 8', board, visibleboard, freeCells, bombCells, score, placeFlag)
        board = output[1]
        visibleboard = output[2]
        freeCells = output[3]
        bombCells = output[4]
        score = output[5]
        placeFlag = output[6]
        console.clear()
        console.table(visibleboard)
    })
} /*line 9*/
