"use strict";
//store the location in an array. make sure your array is not in alphabetical order.
//print your array in its original order.
let places = ["Makkah", "Istambul", "Norway", "Maldives", "Dubai"];
console.log(places);
//print your array in alphabetical order without modifying the actual list.
let orderList = places.sort();
console.log(orderList);
//show that your array is still in its original order by printing it.
let places2 = ["Makkah", "Istambul", "Norway", "Maldives", "Dubai"];
console.log(places2);
//print your array in reverse alphabetical order without changing the order of the original list.
let RevOrderList = places.reverse();
console.log(RevOrderList);
//show that your array is still in its original order by printing it again.
let places3 = ["Makkah", "Istambul", "Norway", "Maldives", "Dubai"];
console.log(places3);
//reverse the order of your list.print the array to show that its order has changed.
places.reverse();
console.log(places);
//reverse the order of your list again.print the list to show its back to its original order.
places.reverse();
console.log(places);
//sort your array so its stored in alphabetical order. print the array to show that its order has been changed
places.sort();
console.log(places);
//sort to chnage your array so its stored in reverse alphabetical order .print the list to show that its order has changed.
places.sort((a, b) => b.localeCompare(a));
console.log(places);
