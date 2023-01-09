if ('function' === typeof importScripts) {
    importScripts("public/src/Games/main.js");
    importScripts("public/src/Games/startms.js");
    addEventListener('message', onMessage);

    function onMessage(e) {
    }
}

function turn(input, board, visibleboard, freeCells, bombCells, score, placeFlag) {
    let cord = input.split(' ').map(s => Number(s));
    let x = cord[0];
    let y = cord[1];
    if (placeFlag === true) {
        if ((visibleboard[x][y] === 'F')) {
            visibleboard[x][y] = ''
            if (board[x][y] === 'b') {
                score--
            } else {
                score++
            }
        } else {
            visibleboard[x][y] = 'F'
            if (board[x][y] === 'b') {
                score++
            } else {
                score--
            }
        }
    }
    if (placeFlag === false && (visibleboard[x][y] !== 'F')) {
        visibleboard[x][y] = board[x][y]
        let newx = 0
        let newy = 0
        for (let j = 0; j < 8; j++) {
            switch (j) {
                case 0:
                    newx = x
                    newy = y + 1
                    break
                case 1:
                    newx = x - 1
                    newy = y
                    break
                case 2:
                    newx = x + 1
                    newy = y
                    break
                case 3:
                    newx = x
                    newy = y - 1
                    break
                case 4:
                    newx = x + 1
                    newy = y + 1
                    break
                case 5:
                    newx = x - 1
                    newy = y - 1
                    break
                case 6:
                    newx = x + 1
                    newy = y - 1
                    break
                case 7:
                    newx = x - 1
                    newy = y  + 1
                    break

            }
            if ((newx === -1) || (newy === -1) || (newx === 9) || (newy === 9)) {
                continue
            }
            if ((board[newx][newy] === 0) && (visibleboard[newx][newy] !== 0) && (visibleboard[newx][newy] !== 'F')) {
                visibleboard[newx][newy] = board[newx][newy]
            }
        }
        let newzx = 0
        let newzy = 0
        let LastNumber = 0
        let ThisNumber = 0
        while (true) {
            let visZeroCells = []
            for (let i = 0; i <= 8; i++) {
                for (let j = 0; j <= 8; j++) {
                    if (visibleboard[i][j] === 0) {
                        visZeroCells.push(i + ' ' + j)
                    }
                }
            }
            for (let i = 0; i < visZeroCells.length; i++) {
                let zcord = visZeroCells[i].split(' ').map(s => Number(s));
                let zx = zcord[0];
                let zy = zcord[1];
                for (let j = 0; j < 8; j++) {
                    switch (j) {
                        case 0:
                            newzx = zx
                            newzy = zy + 1
                            break
                        case 1:
                            newzx = zx - 1
                            newzy = zy
                            break
                        case 2:
                            newzx = zx + 1
                            newzy = zy
                            break
                        case 3:
                            newzx = zx
                            newzy = zy - 1
                            break
                        case 4:
                            newzx = zx + 1
                            newzy = zy + 1
                            break
                        case 5:
                            newzx = zx - 1
                            newzy = zy - 1
                            break
                        case 6:
                            newzx = zx + 1
                            newzy = zy - 1
                            break
                        case 7:
                            newzx = zx - 1
                            newzy = zy + 1
                            break
                    }
                    if ((newzx === -1) || (newzy === -1) || (newzx === 9) || (newzy === 9)) {
                        continue
                    }
                    if ((board[newzx][newzy] === 0) && (visibleboard[newzx][newzy] !== 0) && (visibleboard[newzx][newzy] !== 'F')) {
                        visibleboard[newzx][newzy] = board[newzx][newzy]
                        ThisNumber++
                    }
                }
            }
            if (LastNumber === ThisNumber) {
                break
            } else {
                LastNumber = ThisNumber
            }
        }
        let visZeroCells = []
        for (let i = 0; i <= 8; i++) {
            for (let j = 0; j <= 8; j++) {
                if (visibleboard[i][j] === 0) {
                    visZeroCells.push(i + ' ' + j)
                }
            }
        }
        for (let i = 0; i < visZeroCells.length; i++) {
            let zcord = visZeroCells[i].split(' ').map(s => Number(s));
            let zx = zcord[0];
            let zy = zcord[1];
            for (let j = 0; j < 8; j++) {
                switch (j) {
                    case 0:
                        newzx = zx
                        newzy = zy + 1
                        break
                    case 1:
                        newzx = zx - 1
                        newzy = zy
                        break
                    case 2:
                        newzx = zx + 1
                        newzy = zy
                        break
                    case 3:
                        newzx = zx
                        newzy = zy - 1
                        break
                    case 4:
                        newzx = zx +1
                        newzy = zy + 1
                        break
                    case 5:
                        newzx = zx - 1
                        newzy = zy-1
                        break
                    case 6:
                        newzx = zx + 1
                        newzy = zy-  1
                        break
                    case 7:
                        newzx = zx- 1
                        newzy = zy + 1
                        break

                }
                if ((newzx === -1) || (newzy === -1) || (newzx === 9) || (newzy === 9)) {
                    continue
                }
                if (visibleboard[newzx][newzy] !== 'F') {
                    visibleboard[newzx][newzy] = board[newzx][newzy]
                    ThisNumber++
                }
            }
        }
    }
    if (bombCells.length === score) {
        for (let i = 0; i < freeCells.length; i++) {
            let freecord = freeCells[i].split(' ').map(s => Number(s));
            let xfree = freecord[0]
            let yfree = freecord[1]
            visibleboard[xfree][yfree] = board[xfree][yfree]
        }
        alert("Победа")
    }
    let VisBombCells = []
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            if (visibleboard[i][j] === 'b') {
                VisBombCells.push(i + ' ' + j)
            }
        }
    }
    if (VisBombCells.length > 0) {
        for (let i = 0; i < bombCells.length; i++) {
            let bcord = bombCells[i].split(' ').map(s => Number(s));
            let xb = bcord[0]
            let yb = bcord[1]
            if (visibleboard[xb][yb] !== 'F') {
                visibleboard[xb][yb] = board[xb][yb]
            }
        }
        let FlagCells = []
        for (let i = 0; i <= 8; i++) {
            for (let j = 0; j <= 8; j++) {
                if (visibleboard[i][j] === 'F') {
                    FlagCells.push(i + ' ' + j)
                }
            }
        }
        for (let i = 0; i < FlagCells.length; i++) {
            let Fcord = FlagCells[i].split(' ').map(s => Number(s));
            let xF = Fcord[0]
            let yF = Fcord[1]
            if (board[xF][yF] !== 'b') {
                visibleboard[xF][yF] = 'X'
            }
        }
        alert('Проигрыш \n Счёт = ' + score)
    }
    if (placeFlag === true) {
        placeFlag = false
    }
    return ['', board, visibleboard, freeCells, bombCells, score, placeFlag]
}

function Flagmode(placeFlag) {
    if (placeFlag === true) {
        return false
    }
    if (placeFlag === false) {
        return true
    }
}