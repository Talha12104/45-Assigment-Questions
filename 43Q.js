function show_magician(magicians) {
    for (const magician of magicians)
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
;
const magicians1 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magician(magicians1);
function make_great(magicians2) {
    const great_magician = [];
    for (let i = 0; i < magicians2.length; i++) {
        great_magician.push(magicians2[i] = `The Great ${magicians2[i]}`);
    }
    return great_magician;
}
const great_magician = make_great(magicians1);
show_magician(great_magician);
export {};
