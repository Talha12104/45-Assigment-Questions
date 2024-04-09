"use strict";
let user_name = ["Admin", "Shayan", "Ali", "Talha", "Areeb"];
for (let user of user_name) {
    if (user == "Admin") {
        console.log("Hello Admin,\n Would you like to see status report");
    }
    else {
        console.log(`Hello ${user}, Thank you for logging in again`);
    }
}
