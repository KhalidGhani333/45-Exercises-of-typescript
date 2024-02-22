"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
let invitation = ["Kashif", "Nadeem", "Tariq", "Ali"];
console.log("Dears friends Mr. " + invitation[3] + " is not coming for our dinner.");
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
invitation.pop();
console.log(invitation);
console.log("Dears friends we have some space in dinner i should invite someone else");
invitation.push("Mairaj");
console.log(invitation);
//Print a second set of invitation messages, one for each person who is still in your list.
console.log("Dear Mr." + invitation[0] + ", You are cordially invited to a dinner party at my place. Join us for a night of great food and even better company. ");
console.log("Dear Mr." + invitation[1] + ", I sincerely invite you to join us for a lovely dinner. I hope to see you and have a wonderful time together.");
console.log("Dear Mr." + invitation[2] + ", Good friend, I'm inviting you to the family dinner Friday at my house.");
console.log("Dear Mr." + invitation[3] + " ,I'm inviting you to my dinner event tonight, beloved friend.");
