"use strict";
let fav_1 = "Banana";
let fav_2 = "Apple";
let fav_3 = "Orange";
let favorite_friut = [fav_1, fav_2, fav_3];
if (favorite_friut.includes("Banana")) {
    console.log(`You Really like ${fav_1}`);
}
if (favorite_friut.includes("Orange")) {
    console.log(`You Really like ${fav_3}`);
}
if (favorite_friut.includes("Apple")) {
    console.log(`You Really like ${fav_2}`);
}
if (favorite_friut.includes("WaterMelon")) {
    console.log(`${fav_3} is Your Favoite Fruit`);
}
else {
    console.log(`This is not your Favorite Fruit`);
}
if (favorite_friut.includes("Guava")) {
    console.log(`${fav_3} is Your Favoite Fruit`);
}
else {
    console.log(`This is not your Favorite Fruit`);
}
