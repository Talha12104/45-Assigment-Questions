import chalk from "chalk";
let animals = ["Cat", "Parrot", "Dog"];
for (const animal of animals) {
    console.log("\n");
    console.log(chalk.red.italic(`${animal}!`), chalk.green.italic("\n Would Make  great pet"));
}
