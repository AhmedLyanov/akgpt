import axios from "axios";
import fs from "fs";
import path from "path";
export interface QueryOptions {
  model?: string;
  system?: string;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  stream?: boolean;
  seed?: number;              
  json_response?: boolean;    
}


export default class AKGPT {
  private apiUrl: string;
  private apiKey: string;
  private headers: Record<string, string>;

  private availableModels: string[];
  private availableVoices: string[];

  constructor() {
    this.apiUrl = "https://text.pollinations.ai/openai";
    this.apiKey = "K9IvlvLqomg9BcEL"; 

    this.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.apiKey}`,
    };

    this.availableModels = [
      "deepseek-reasoning", "gemini", "gpt-5-nano", "mistral", "nova-fast",
      "openai", "openai-audio", "openai-fast", "openai-large", "openai-reasoning",
      "qwen-coder", "roblox-rp", "bidara", "evil", "midijourney", "mirexa",
      "rtist", "sur", "unity"
    ];

    this.availableVoices = [
      "alloy", "echo", "fable", "onyx", "nova", "shimmer", 
      "coral", "verse", "ballad", "ash", "sage", "amuch", 
      "aster", "brook", "clover", "dan", "elan", "marilyn", 
      "meadow", "jazz", "rio", "megan-wetherall", "jade-hardy", 
      "megan-wetherall-2025-03-07"
    ];
  }

  async query(prompt: string, options: QueryOptions = {}): Promise<any> {
    const messages: any[] = [];
    if (options.system) messages.push({ role: "system", content: options.system });
    messages.push({ role: "user", content: prompt });

    const data: any = {
      model: options.model || "openai",
      messages,
    };

    if (options.max_tokens !== undefined) data.max_tokens = options.max_tokens;
    if (options.temperature !== undefined) data.temperature = options.temperature;
    if (options.top_p !== undefined) data.top_p = options.top_p;
    if (options.presence_penalty !== undefined) data.presence_penalty = options.presence_penalty;
    if (options.frequency_penalty !== undefined) data.frequency_penalty = options.frequency_penalty;
    if (options.stream) data.stream = true;

    try {
      const res = await axios.post(this.apiUrl, data, { headers: this.headers });
      return res.data;
    } catch (err: any) {
      console.error("Ошибка при запросе к API:", err.message);
      return null;
    }
  }

  async query_with_image(prompt: string, imageBase64: string, options: QueryOptions = {}): Promise<any> {
    const messages: any[] = [];
    if (options.system) messages.push({ role: "system", content: options.system });

    const content = [
      { type: "text", text: prompt },
      { type: "image_url", image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
    ];

    messages.push({ role: "user", content });

    const data: any = {
      model: options.model || "openai",
      messages,
    };

    if (options.max_tokens !== undefined) data.max_tokens = options.max_tokens;

    try {
      const res = await axios.post(this.apiUrl, data, { headers: this.headers });
      return res.data;
    } catch (err: any) {
      console.error("Ошибка при запросе с изображением:", err.message);
      return null;
    }
  }

  async query_with_audio(prompt: string, audioBase64: string, audioFormat = "wav", options: QueryOptions = {}): Promise<any> {
    const messages: any[] = [];
    if (options.system) messages.push({ role: "system", content: options.system });

    const content = [
      { type: "text", text: prompt },
      {
        type: "input_audio",
        input_audio: {
          data: audioBase64,
          format: audioFormat,
        },
      },
    ];

    messages.push({ role: "user", content });

    const data: any = {
      model: options.model || "openai-audio",
      messages,
    };

    try {
      const res = await axios.post(this.apiUrl, data, { headers: this.headers });
      return res.data;
    } catch (err: any) {
      console.error("Ошибка при запросе с аудио:", err.message);
      return null;
    }
  }

  async text_to_speech(text: string, voice = "nova", model = "openai-audio"): Promise<Buffer | null> {
    if (!this.availableVoices.includes(voice)) {
      console.warn(`Предупреждение: Голос '${voice}' не поддерживается`);
    }

    const speechUrl = "https://text.pollinations.ai";
    const encodedText = encodeURIComponent(text);

    try {
      const response = await axios.get(`${speechUrl}/${encodedText}`, {
        params: { model, voice },
        responseType: "arraybuffer",
      });
      return Buffer.from(response.data);
    } catch (err: any) {
      console.error("Ошибка при генерации речи:", err.message);
      return null;
    }
  }

  save_audio(audioData: Buffer, filename: string): boolean {
    try {
      fs.writeFileSync(filename, audioData);
      return true;
    } catch (err: any) {
      console.error("Ошибка при сохранении аудио:", err.message);
      return false;
    }
  }

  encode_image_to_base64(imagePath: string): string | null {
    try {
      const file = fs.readFileSync(imagePath);
      return file.toString("base64");
    } catch (err: any) {
      console.error("Ошибка при кодировании изображения:", err.message);
      return null;
    }
  }

  encode_audio_to_base64(audioPath: string): string | null {
    try {
      const file = fs.readFileSync(audioPath);
      return file.toString("base64");
    } catch (err: any) {
      console.error("Ошибка при кодировании аудио:", err.message);
      return null;
    }
  }

  get_available_models(): string[] {
    return [...this.availableModels];
  }

  get_available_voices(): string[] {
    return [...this.availableVoices];
  }
}
