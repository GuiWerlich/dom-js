function sum(num1, num2, callback) {
    let result = num1 + num2;
    callback(result)
}

function printResult(result) {
    console.log(`O resultado da soma é: ${result}`)
}

sum(2,3,printResult)