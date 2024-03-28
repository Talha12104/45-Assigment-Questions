"use strict";
let guestlist = ["Shayan", "Ali", "Hamza"];
for (let i = 0; i < guestlist.length; i++) {
    //console.log(`Dear ${guestlist[i]}\n You are invited for a cozy dinner tomorrow.`)
}
//15 Question 
//unabletoAttend
let remove_g = "Hamza";
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}!\n${remove_g} Can't Make it to the Dinner`);
});
//Replace Guest
let newGuest = "Areeb";
guestlist[guestlist.indexOf(remove_g)] = newGuest;
guestlist.forEach(guestlist => {
    // console.log(`Dear ${guestlist},\n Would you like to join me for dinner`)
});
//16 Question
//found Bigger Table.
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}, \n I found Bigger Table For Dinner So am inviting more people on dinner.`);
});
guestlist.unshift("Mohib");
guestlist.splice(guestlist.length / 3, 0, "Shoraim");
guestlist.push("Arham");
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist},\n Would you like to join me for dinner`);
});
//17 Question
//Shrinking Guest list
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}\n Unfortunately the big table won't arrive on time\n So inviting two people only`);
});
while (guestlist.length > 2) {
    let removeG = guestlist.pop();
    console.log(`Dear ${removeG}\n Sorry, I can't invite you for dinner`);
}
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}\n Your still invitedc on dinner`);
});
