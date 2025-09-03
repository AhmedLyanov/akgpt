import AKGPT from "../src/index.js";

const client = new AKGPT();

(async () => {
  const res3 = await client.query("Что такое AI?", { json_response: true });
  console.log("Ответ API (JSON):", res3);
})();
