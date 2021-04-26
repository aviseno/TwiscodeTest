async function bin2dec(binaryInput){
    let result = 0;
    let x = binaryInput.toString()
    x = x.split('').reverse().join('')
    for (let i = 0; i < x.length; i++){
        result += parseInt(x[i])*Math.pow(2, i)
    }

    console.log(result)
    return result;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('input binary number: ', binary => {
    bin2dec(binary);
    readline.close();
});

