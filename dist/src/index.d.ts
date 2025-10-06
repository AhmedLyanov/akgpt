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
    private apiUrl;
    private apiKey;
    private headers;
    private availableModels;
    private availableVoices;
    constructor();
    query(prompt: string, options?: QueryOptions): Promise<any>;
    query_with_image(prompt: string, imageBase64: string, options?: QueryOptions): Promise<any>;
    query_with_audio(prompt: string, audioBase64: string, audioFormat?: string, options?: QueryOptions): Promise<any>;
    text_to_speech(text: string, voice?: string, model?: string): Promise<Buffer | null>;
    save_audio(audioData: Buffer, filename: string): boolean;
    encode_image_to_base64(imagePath: string): string | null;
    encode_audio_to_base64(audioPath: string): string | null;
    get_available_models(): string[];
    get_available_voices(): string[];
}
