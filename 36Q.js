async function make_shirt(size = "Medium", message = "I Love Typescipt") {
    console.log(`Shirt size should be ${size}`);
    console.log(`Message Print on shirt ${message}`);
}
make_shirt("Medium", `"My Life My Rules"`);
export { make_shirt };
