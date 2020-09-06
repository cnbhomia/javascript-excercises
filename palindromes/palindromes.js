const palindromes = function(palinString) {

    let newString =''

    //clean up input string
    palinString = palinString.replace(/[^A-Z0-9]/ig, "").toLowerCase()

    for(let i= palinString.length-1; i>=0 ; i-- ){
        newString = newString.concat(palinString[i])
    }

    return palinString==newString? true:false
}

module.exports = palindromes
