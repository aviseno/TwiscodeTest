async function checkPalindrome(strInput){
    let strArray = strInput.split(" ")
    let arrrayResult = [];
    for (let i = 0; i < strArray.length; i++){
        // console.log(strArray[i])
        for (let j = 0; j < strArray.length; j++){
            // console.log(strArray[i], (strArray[j].split("").reverse().join("")).substring(0, strArray[i].length))
            if (i == j){
            }
            else if(strArray[i] == (strArray[j].split("").reverse().join("")).substring(0, strArray[i].length)){
                if (strArray[i].length != strArray[j].length){
                    arrrayResult.push(strArray[i], strArray[j])
                } else {
                    arrrayResult.push(strArray[i])
                }
            }
        }
    }
    console.log(arrrayResult.join(" "))
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('input string: ', str => {
    checkPalindrome(str);
    readline.close();
});