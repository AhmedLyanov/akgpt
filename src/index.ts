import axios from "axios";

export interface QueryOptions {
  model?: string;
  seed?: number;
  temperature?: number;
  top_p?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  json_response?: boolean;
  system?: string;
  stream?: boolean;
  private?: boolean;
  referrer?: string;
}

export default class AKGPT {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://text.pollinations.ai";
  }

  async query(prompt: string, options: QueryOptions = {}): Promise<any> {
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `${this.baseUrl}/${encodedPrompt}`;

      const response = await axios.get(url, { params: options });

      return options.json_response ? response.data : response.data.toString();
    } catch (err: any) {
      console.error("Error making API request:", err.message);
      return null;
    }
  }
}
