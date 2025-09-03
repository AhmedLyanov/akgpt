import AKGPT from "../src/index.js";
const client = new AKGPT();
(async () => {
    const res2 = await client.query("Напиши короткое стихотворение о роботах", {
        model: "mistral",
        seed: 123,
        system: "Ты поэт",
    });
    console.log("Ответ API:", res2);
})();
