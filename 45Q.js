function createCar(manufacturer, model, optional) {
    const car = {
        manufacturer,
        model,
        ...optional,
    };
    return car;
}
// Call the function with required information and additional key-value pairs
const myCar = createCar("Toyota", "Camry", { color: "blue", feature: "sunroof" });
// Print the returned car object
console.log(myCar);
export {};
