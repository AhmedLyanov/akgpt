import AKGPT from "../src/index.js";
const client = new AKGPT();
(async () => {
    const res1 = await client.query("Что такое искусственный интеллект?");
    console.log("Ответ API:", res1);
})();
