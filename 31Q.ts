let user_name : string [] = ["Admin","Shayan","Ali","Talha","Areeb"]
// for (let user of user_name){
//     if (user_name.length == 0){
//         console.log("We need to find some users.")
//     } else 
//         if (user == "Admin"){
//             console.log("Hello Admin,\n Would you like to see status report")
//         } else {console.log(`Hello ${user}, Thank you for logging in again`)}
//  }
    user_name.splice(0,5)
    if (user_name.length == 0){
        console.log("We need to find some users.")}
        else{
    for (let user of user_name){
        if (user == "Admin"){
            console.log("Hello Admin,\n Would you like to see status report")
        } else {console.log(`Hello ${user}, Thank you for logging in again`)}}}