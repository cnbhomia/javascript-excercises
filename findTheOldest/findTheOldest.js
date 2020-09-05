
//******************SOL 1********************************* */
/*  This solution works ----- 

let findTheOldest = function(persons) {

    let maxAgePerson = persons[0];
    maxAgePerson.age =0;
    for( i of persons){
        if(typeof(i.yearOfDeath) === 'undefined'){
            i.yearOfDeath = new Date().getFullYear();
        }
        i.age = i.yearOfDeath - i.yearOfBirth;
        console.log(i.age);
        
        if(i.age > maxAgePerson.age){
            maxAgePerson = i;
        }
    }

    return maxAgePerson;
}
*/


//******************SOL 2********************************* */

//Exploring use of Array Methods ------- 

let findTheOldest = function(people){

    // adding age to all
    people.forEach(person => {
        person.age = person.yearOfDeath? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
    })

    people.forEach(person =>{
        person.age = person.yearOfDeath - person.yearOfBirth ;
    })
/*
    maxAge = people.forEach(person => {
        person.age = person.yearOfDeath? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
    }).map(person =>person.age).reduce((a,b)=>Math.max(a,b))

    To be explored - Array.find() to find person with age=maxAge()
*/
    
}



module.exports = findTheOldest
