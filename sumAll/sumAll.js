const lowToHigh = function(a,b){
    if (a < b){
      return [a,b];
    }else{
      return [b,a];
    }
  }

const sumAll = function(lower,upper) {

    //checking for ERROR conditions
    if(lower <0 || upper <0){
        return 'ERROR';
    }else if( typeof(lower + upper) != 'number'){
        return 'ERROR';
    }

    let sum=0;
       
    //summation by iter over i, from low value to high
    //lowToHigh() return [a,b] such that a<b

    for(let i=lowToHigh(lower,upper)[0] ; i<= lowToHigh(lower,upper)[1]; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll ;
