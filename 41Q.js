function show_magician(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Albert", "Aladin", "Harry Potter"];
show_magician(magician);
export {};
