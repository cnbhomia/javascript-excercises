const repeatString = function(string,n) {
    let output = string;
    if (n==0){
        return '';
    }else if (n== -1){
        return 'ERROR';
    }
    if(string==''){
        return '';
    }

    for(let i=1; i<n; i++){
        output += string;
    
    }
    
    return output;

}

module.exports = repeatString
