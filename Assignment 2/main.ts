
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.


let personName: string = "Khalid ghani";

//lowercase

let lowercase = personName.toLowerCase();
console.log("Lowercase: "+lowercase)

//uppercase

let uppercase = personName.toUpperCase();
console.log("Uppercase: "+ uppercase)

//titlecase

let titlecase = personName.replace(/\b\w/g, c=> c.toUpperCase());
console.log("Titlecase: " + titlecase);
