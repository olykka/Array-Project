
const welcome = () => {
    console.log("Bonjour w tabelach");

}
welcome();

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

const products = ["oliwa", "czosnek", "parmezan", "dobry-makaron", "pietruszka"];

products.forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
});

{
    const tasks = [
        {
            content: "zrobić pranie",
            done: false,
        },
        {
            content: "ugotować obiad",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
              ${task.content}
            </li>
            `;
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };
    
    init();
}

