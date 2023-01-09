

let board = [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []]

];

let visibleboard = [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []]

];


let freeCells = []
for (let i = 0; i < 10; i++) {
    board[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 8)] = 'b';
}
for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
        if (board[i][j] == '') {
            freeCells.push(i+' '+j)
        }

    }
}

console.table(board);
console.log(freeCells)
for(let i = 0;i < freeCells.length;i++){
    let cord = freeCells[i].split(' ') .map(s => Number(s));
    let x = cord[0];
    let y = cord[1];
    let number = 0;
    let xarr = [x-1,x,x+1];
    let yarr = [y-1,y,y+1]
    for(let xu = 0;xu < 3;xu ++){
        newx =  xarr[xu];
        if((newx === -1) || (newx === 9)){
            continue
        }
        for(let yu = 0;yu < 3;yu ++){
            newy =  yarr[yu];
            if((newy === -1) || (newy === 9)){
                continue
            }
            if(board[newx][newy] === 'b'){
                number ++
            }
        }
    }
    board[x][y] = number;
}
console.table(board);



let bombCells = []
for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
        if (board[i][j] === 'b') {
            bombCells.push(i+' '+j)
        }

    }
}
