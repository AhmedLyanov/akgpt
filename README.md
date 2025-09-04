# 🤖 AKGPT - AI-Powered Multimodal Library

<div align="center">

[![npm version](https://img.shields.io/npm/v/akgpt.svg?style=for-the-badge)](https://www.npmjs.com/package/akgpt)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Мощная библиотека для взаимодействия с API Pollinations.ai через Python и Node.js**

</div>

## 🌟 Особенности

- **🚀 Простой API** - Интуитивно понятный интерфейс для работы с AI
- **🎯 Мультимодальность** - Поддержка текста, изображений и аудио
- **🤖 Множество моделей** - Работа с различными AI-моделями (Mistral и другие)
- **📦 TypeScript поддержка** - Полная типизация для лучшего опыта разработки
- **⚡ Готовность к production** - Собранные файлы и детальная документация

## 📦 Установка

```bash
npm install akgpt
```

## Пример простого запроса
```
import AKGPT from "akgpt";

const client = new AKGPT();

(async () => {

  const res1 = await client.query("Что такое искусственный интеллект?");
  console.log("Ответ API:", res1);

})();
```

## Пример запроса в JSON формате
```
import AKGPT from "akgpt";

const client = new AKGPT();

(async () => {
  const res3 = await client.query("Что такое AI?", { json_response: true });
  console.log("Ответ API (JSON):", res3);
})();
```

## Пример запроса с параметрами
```
import AKGPT from "akgpt";

const client = new AKGPT();

(async () => {

  const res2 = await client.query("Что такое Options API", {
    model: "mistral",
    seed: 123,
    system: "Ты senior-разработчик на vue",
  });
  console.log("Ответ API:", res2);

})();
```
