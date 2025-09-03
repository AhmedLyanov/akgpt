import AKGPT from "./src/index.js";
const client = new AKGPT();
(async () => {
    const res1 = await client.query("Что такое искусственный интеллект?");
    console.log("Ответ API:", res1);
    const res2 = await client.query("Напиши короткое стихотворение о роботах", {
        model: "mistral",
        seed: 123,
        system: "Ты поэт",
    });
    console.log("Ответ API:", res2);
    const res3 = await client.query("Что такое AI?", { json_response: true });
    console.log("Ответ API (JSON):", res3);
})();
