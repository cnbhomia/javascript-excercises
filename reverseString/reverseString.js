const reverseString = function(string) {

    const strlen = string.length; //string length
    let answer ='';
    for (let i=strlen ; i>0; i--){
        console.log(string[i-1])
        answer +=string[i -1]
        console.log(answer)
    }
    return answer;
}

module.exports = reverseString
