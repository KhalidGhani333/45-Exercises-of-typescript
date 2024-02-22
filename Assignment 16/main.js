"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that
// you can invite only two people for dinner.
let invitation = ["Ahmed", "Kashif", "Nadeem", "Tariq", "Umer", "Mairaj", "Sufyan", "Faizan", "Hashir", "Asif"];
console.log(invitation);
console.log("Dears i can invite only two people for Dinner");
//Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them know
//you’re sorry you can’t invite them to dinner.
invitation.pop();
console.log(invitation);
console.log("Dear Asif Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Hashir Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Faizan Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear sufyan Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Mairaj Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Umer Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Tariq Sorry I can't invite you for dinner");
invitation.pop();
console.log(invitation);
console.log("Dear Nadeem Sorry I can't invite you for dinner");
// Print a message to each of the two people still on your list, letting them know they’re still invited
console.log("Dear " + invitation[0] + " you are still invited for dinner");
console.log("Dear " + invitation[1] + " you are still invited for dinner");
// Remove the last two names from your list, so you have an empty list.
invitation.pop();
console.log(invitation);
invitation.pop();
console.log(invitation);
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(invitation);
