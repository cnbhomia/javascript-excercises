
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

/*
**************** Sol3 - this works *******************
let age=0;
let maxAgePerson = people[0]
people.forEach(person => {
        personAge = person.yearOfDeath? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
        console.log(personAge);
         if(personAge>age){
            console.log(maxAgePerson)
            maxAgePerson = person
            console.log(maxAgePerson)
            age = personAge;
        }  
})
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
