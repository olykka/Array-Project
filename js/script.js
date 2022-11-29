
const welcome = () => {
    console.log("Bonjour w tabelach");

}
welcome();

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

const products = ["oliwa, czaosnek, parmezan, dobry-makaron, pietruszka"];

products.forEach((product, index) => {
    console.log(`${index +1}. ${product}`);
});
