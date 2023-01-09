document.getElementById('input')
    .addEventListener('keyup', function (event){
        event.preventDefault()
        if (event.code === 'Enter') {
            runProgram();
            document.getElementById('input').value = "";
        }
    })

function getInput() {

    return document.getElementById('input').value;
}

function WriteOutput(arr) {

    document.getElementById('output').value =
        arr.join(' ')
}

function Logic(text) {

    let [n] = text.split(" ").map(s => Number(s));

    let k = 1;

    while (k*k <= n){
        k += 1;
    }

    return [k];
}

function runProgram() {

    WriteOutput(Logic(getInput()));
}
