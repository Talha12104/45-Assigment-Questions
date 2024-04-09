function show_magician(magicians:string[]): void {
        for (const magician of magicians)
            console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
           };
           const magicians1:string [] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"]
           show_magician(magicians1)
           function make_great(magicians2:string[]):string[]{
            const great_magician:string [] = [];
            for (let i = 0; i < magicians2.length; i++ ){
                great_magician.push(magicians2[i] = `The Great ${magicians2[i]}`);
            } return great_magician;
        }
           const great_magician:string[] = make_great(magicians1)


           show_magician(great_magician) 
           