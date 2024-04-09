async function Cities(name, country = "Pakistan") {
    console.log(`${name} is a city of ${country}`);
}
Cities("Karachi");
Cities("Lahore");
Cities("Beijing", "China");
export {};
