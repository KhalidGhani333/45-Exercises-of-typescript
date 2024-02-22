//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,country:string){
    return `${city},${country}`
}

let location1=city_country("Karachi","Pakistan");
let location2=city_country("Jaddah","Saudi Arab");
let location3=city_country("Tokoyo","Japan");

console.log(location1)
console.log(location2)
console.log(location3)


