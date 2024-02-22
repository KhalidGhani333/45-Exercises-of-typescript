
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 //If you don’t have anything specific to write because your programs are too simple at this point,
 // just add your name and the current date at the top of each program file. Then write one sentence describing
 //  what the program does.


 // This program demonstrates storing a person's name with whitespace characters,
// printing it with whitespace, and then printing it after removing the whitespace.

let person= "\t Ahmed \n Shah \t";

  console.log("Name with whitespace: '" + person + "'");
  
 
  let strippedName: string = person.trim();
  
  console.log("Stripped name: '" + strippedName + "'");



// This program demonstrates storing a person's name in a variable and printing it
// in lowercase, uppercase, and titlecase.

let personName: string = "Khalid ghani";

//lowercase

let lowercase = personName.toLowerCase();
console.log("Lowercase: "+lowercase)

//uppercase

let uppercase = personName.toUpperCase();
console.log("Uppercase: "+ uppercase)

//titlecase

let titlecase: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase: " + titlecase);
