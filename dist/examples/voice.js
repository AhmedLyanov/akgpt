import AKGPT from "../src/index.js";
const client = new AKGPT();
console.log("\n=== 3. Генерация речи ===");
const audio = await client.text_to_speech("Привет мир! Это тестовая речь.", "rio");
if (audio) {
    client.save_audio(audio, "speech.wav");
    console.log("Аудио сохранено: speech.wav");
}
