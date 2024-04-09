let current_name : string [] = ["ADMIN","Shayan","Ali","TALHA","Areeb"]
let new_users : string [] =["Admin","Talha","Haseeb","Muhammad","Husnain"]
let current_namelist = current_name.map(user => user.toUpperCase())
for (let new_user of new_users){
    if (current_namelist.includes (new_user.toUpperCase())){
        console.log(`Sorry ${new_user} name is already taken`)
    } else {
        console.log(`${new_user} Added Successfully`)
    }
}