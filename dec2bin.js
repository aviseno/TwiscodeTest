async function dec2bin(decimalInput){
    let result = "";
    let x = "";
    let quoetient = decimalInput;
    while (quoetient != 0) {
        result += ((parseInt(quoetient))%2).toString()
        quoetient = (quoetient/2).toString().split(".")[0]
        console.log(result, quoetient)
    }

    console.log(result.split("").reverse().join(""))
    return result;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('input decimal number: ', decimal => {
    dec2bin(decimal);
    readline.close();
});

