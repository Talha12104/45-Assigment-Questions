function show_magician(magicians:string[]): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician:string [] = ["Albert","Aladin","Harry Potter"]
show_magician(magician)