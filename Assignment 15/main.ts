//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.

let invitation:string[]=["Kashif","Nadeem","Tariq","Mairaj"]

console.log(invitation)

console.log("Dears i found bigger dinner table we have more space i think we add some more friends")

invitation.push("sufyan","faizan","hashir")
console.log(invitation)

console.log("Dears i add three more friends in our dinner.")


//Add one new guest to the beginning of your array.
invitation.unshift("Ahmed")
console.log(invitation)

console.log("Dear i'm adding "+invitation[0] +" to our dinner." )


//Add one new guest to the middle of your array.
invitation.splice(4,0,"Umer")
console.log(invitation)

//Use append() to add one new guest to the end of your list.
invitation.push("Asif")
console.log(invitation)

console.log("Dears i'm adding "+invitation[4]+ " and "+invitation[9]+" to our dinner")

// Print a new set of invitation messages, one for each person in your list.

console.log("Dear Mr."+invitation[0]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[1]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[2]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[3]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[4]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[5]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[6]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[7]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[8]+" ,I'm inviting you to my dinner event tonight, beloved friend.")
console.log("Dear Mr."+invitation[9]+" ,I'm inviting you to my dinner event tonight, beloved friend.")

