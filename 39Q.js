import chalk from "chalk";
function city_country(city, country) {
    return `${city}, ${chalk.bold(country)}`;
}
let c1 = city_country("Karachi", "Pakistan");
let c2 = city_country("Lahore", "Pakistan");
let c3 = city_country("Beijing", "China");
console.log(c1);
console.log(c2);
console.log(c3);
