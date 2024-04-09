function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicians);
for (const magician of magicians) {
    console.log(magician);
}
export { make_great };
