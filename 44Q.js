function makeSandwich(...items) {
    if (items.length === 0) {
        console.log("No items provided for the sandwich.");
    }
    else {
        console.log(`Sandwich with ${items.join(", ")}`);
    }
}
// Call the function with different numbers of arguments
makeSandwich("lettuce", "tomato", "cheese");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly", "banana");
export {};
