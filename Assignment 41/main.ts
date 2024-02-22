//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.



let magicianNames: string[] = ["Shin Lim","Chris Angel","Harry Houdini","Derren Brown","David Blaine"];

function makeGreat(magicianNames:string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + " the Great";
        
    }
}
makeGreat(magicianNames)

function showMagicians(magicianNames: string[]): void {
    for (const show_magicians of magicianNames) {
        console.log(show_magicians);
    }
}
showMagicians(magicianNames);



