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
    private baseUrl;
    constructor();
    query(prompt: string, options?: QueryOptions): Promise<any>;
}
