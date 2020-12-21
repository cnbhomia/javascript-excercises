
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

/*
// comeback code, december 12
const repeatString = function(string,n) {
    
    

    let output = string;
    
    console.log(output)

    for( let i=0 ; i<n-1 ; i++){
        output += string ;
        //console.log(output)

    }

     return (n==0?'':output);

}

module.exports = repeatString

*/