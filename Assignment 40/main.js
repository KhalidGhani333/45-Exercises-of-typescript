"use strict";
//Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magicianName = ["Shin Lim", "Chris Angel", "Harry Houdini", "Derren Brown", "David Blaine"];
function show_magicians(magician) {
    console.log();
    for (let magician of magicianName) {
        console.log(magician);
    }
}
show_magicians(magicianName);
