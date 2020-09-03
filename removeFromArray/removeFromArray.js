
//Solution 1: looping through the array
/*
const removeFromArray = function(workOn) {
    
    let answer=[];
    const arglen = arguments.length;
    let args = Array.prototype.slice.call(arguments)
    args.shift()
    console.log('Arguments are: ', args)
    console.log('WorkOn is: ', workOn)
    
    for( let i=0; i<workOn.length; i++){
        console.log('workon',i,' ',workOn[i])

        for (let j=0; j<args.length; j++){

            console.log('args',j,' ',args[j]);
            

            if (workOn[i] != args[j]){
                answer.concat(workOn[i]);
                console.log('updated answer', answer)
            }
        }
    }
    return answer;
}
*/
/*
const removeFromArray = function(workOn, ...toBeRemoved) {

    
    //let args = Array.prototype.slice.call(arguments)
    //args.shift() //remove the array itself from position 0
    console.log(workOn);
    console.log(typeof toBeRemoved);

    function compare(value){
        console.log(value);
        console.log(!!toBeRemoved.includes(value));
        return !toBeRemoved.includes(value);
    }

    const answer =(workOn.filter(compare));
    console.log(answer)
    return answer;
}

*/
//function to filter out null values
function notNull(value){
    console.log("valuePass value is: ", value)
    return (value != null)? value: null;
}

//compare function that return null if the array value
// given matches any of the additional arguments, and returns
//the value if it is not found in arguments. 
// The returned values are stored in an temporary array
function compare(value,args){
    console.log(args);
    console.log(value);
    for(let j=0; j<args.length; j++){
        if(value === args[j] ){
            console.log('it matched ! ')
            return null;
        }else{
            console.log('it did not match')
            return value;
        }
    }
}

// Create function to compare each element of the array
//with all the additional arguments given
const removeFromArray = function(workOn) {

    let answer =[];
    let args = Array.prototype.slice.call(arguments)
    args.shift() //remove the array itself from position 0

    let valuePass=[];
    for( let i=0; i<workOn.length ; i++){

        valuePass.push(compare(workOn[i],args))
        console.log('valuePass :',valuePass)
    }
    
   // answer.concat(valuePass.filter(notNull()));

}


module.exports = removeFromArray;
