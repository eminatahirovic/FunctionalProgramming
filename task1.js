/*Given an array of objects representing students with name and grade, 
write two functions:
An imperative function that returns a list of filtered students who 
have a grade of 60 or above.
A declarative function that achieves the same result using 
functional programming principles.
Example Input:
const students = [
    { name: "Osman", grade: 85 },
    { name: "Sena", grade: 55 },
    { name: "Ismet", grade: 72 },
    { name: "Rile", grade: 40 }
];
// Output should be:
[
    { name: "Osman", grade: 85 },
    { name: "Ismet", grade: 72 }
]
*/

const students = [
    { name: "Osman", grade: 85 },
    { name: "Sena", grade: 55 },
    { name: "Ismet", grade: 72 },
    { name: "Rile", grade: 40 }
];
/*function studentss(students){
    let filtered = [];

    for( var i = 0; i< students.length; i++){
        if(students[i].grade >= 60){
            filtered.push(students[i])
        }
    }
    return filtered; 
}
console.log("Imperative:", studentss(students))
*/

function filterStudentsImperative(students){
    let filtered = [];

    for (var i = 0; i < students.length; i++){   
        if(students[i].grade >= 60){
            filtered.push(students[i]);
        }
    }

    return filtered;
}

