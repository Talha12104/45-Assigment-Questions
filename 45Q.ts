interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    feature?: string;
}

function createCar(manufacturer: string, model: string, optional: Record<string, any>): Car {
    const car: Car = {
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