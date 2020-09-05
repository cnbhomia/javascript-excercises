const nextNum =(a,b) => a+b;

const fibonacci = function(position) {
    let fiboSequence =[1];
    if (position>0){
        for(let i = 1; i < position; i++){
            
            fiboSequence.push(nextNum(fiboSequence[i-1],(i==1)? 0 : fiboSequence[i-2]));

        }
    }else return 'OOPS';

    return fiboSequence.pop();

}

module.exports = fibonacci
