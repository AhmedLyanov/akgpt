import AKGPT from "../src/index.js";
const client = new AKGPT();
console.log("\n=== 4. Список моделей ===");
console.log(client.get_available_models());
console.log("\n=== 5. Список голосов ===");
console.log(client.get_available_voices());
