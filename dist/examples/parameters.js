import AKGPT from "../src/index.js";
const client = new AKGPT();
(async () => {
    const res2 = await client.query("Дай любой код", {
        model: "mistral",
        seed: 123,
        system: "You Senior Developer Vuejs, React, Nextjs",
        max_tokens: 150,
    });
    console.log("Ответ:", res2.choices?.[0]?.message?.content || res2);
})();
