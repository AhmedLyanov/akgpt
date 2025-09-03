import axios from "axios";
export default class AKGPT {
    constructor() {
        this.baseUrl = "https://text.pollinations.ai";
    }
    async query(prompt, options = {}) {
        try {
            const encodedPrompt = encodeURIComponent(prompt);
            const url = `${this.baseUrl}/${encodedPrompt}`;
            const response = await axios.get(url, { params: options });
            return options.json_response ? response.data : response.data.toString();
        }
        catch (err) {
            console.error("Error making API request:", err.message);
            return null;
        }
    }
}
