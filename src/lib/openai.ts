//OpenAI API Configuration
import {OpenAI} from 'openai';

//Check if API key is present
if (!process.env.OPENAI_API_KEY) {
  console.warn('OPENAI_API_KEY is missing as environment variable');
}

//Create and export the OpenAI client
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

//Helper function for improving medical terms
export async function improveMedicalTerms(text: string): Promise<string> {
    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful medical transcription assistant. Correct any medical terminology in the following text while preserving the original meaning. Only make changes to medical terms that were likely misheard or misspelled."
                },
                {
                    role: "user",
                    content: text
                }
            ],
            temperature: 0.3,
            max_tokens: 1000
    });

    return response.choices[0].message.content || text;
} catch (error) {
    console.error("Error working on medical terms transcription", error);
    return text;
}
}

//Helper function for translation
export async function translateMedicalInput(
    text: string,
    sourceLang: string,
    targetLang: string
): Promise<string> {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `You are a helpful medical translator. Translate the following text from ${sourceLang} to ${targetLang} while preserving the original meaning, medical terminology and context accurately.`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            temperature: 0.3,
            max_tokens: 1500
        });
        return response.choices[0].message.content || text;
    } catch (error) {
        console.error("Error translating medical input", error);
        return text; // Return the original text if there is an error
    }
}   