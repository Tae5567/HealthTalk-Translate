'use client';
//OpenAI API Configuration
import { OpenAI } from 'openai';

//Check if API key is present
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
if (!apiKey) {
  console.warn('NEXT_PUBLIC_OPENAI_API_KEY is missing as environment variable - API calls will fail');
}

//Create and export the OpenAI client
export const openai = new OpenAI({
    apiKey: apiKey || 'dummy-key-replace-with-real-one', // Use dummy key to avoid initialization errors
    dangerouslyAllowBrowser: true
});

//Helper function for improving/enhancing medical terms
export async function improveMedicalTerms(text: string): Promise<{text: string, medicalTerms: string[]}> {
    if (!text.trim()) return {text, medicalTerms: []};
    
    // Check if API key is available first
    if (!apiKey) {
        console.error("No OpenAI API key provided - cannot improve medical terms");
        return {text, medicalTerms: []};
    }
    
    try {
        console.log("Sending text to OpenAI for medical term improvement:", text);
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful medical transcription assistant. Correct any medical terminology in the following text while preserving the original meaning. Return the corrected text and also provide a JSON array of all medical terms identified, like this format: {\"text\": \"corrected text\", \"medicalTerms\": [\"term1\", \"term2\"]}"
                },
                {
                    role: "user",
                    content: text
                }
            ],
            temperature: 0.3,
            max_tokens: 1000
        });

        const responseText = response.choices[0].message.content || "{}";
        console.log("Raw response:", responseText);

        try {
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            const jsonStr = jsonMatch ? jsonMatch[0] : responseText;
            
            const parsedResponse = JSON.parse(jsonStr);
            return {
                text: parsedResponse.text || text,
                medicalTerms: Array.isArray(parsedResponse.medicalTerms) ? parsedResponse.medicalTerms : []
            };
        } catch (parseError) {
            console.error("Error parsing JSON response", parseError);
            return {text, medicalTerms: []};
        }
    } catch (error) {
        console.error("Error improving medical terms transcription", error);
        return {text, medicalTerms: []};
    }
}

//Helper function for translation
export async function translateMedicalInput(
    text: string,
    sourceLang: string,
    targetLang: string
): Promise<string> {
    if (!text.trim()) return '';
    
    // Check if API key is available first
    if (!apiKey) {
        console.error("No OpenAI API key provided - cannot translate text");
        throw new Error("OpenAI API key is missing");
    }
    
    //Error handling
    try {
        console.log(`Translating text from ${sourceLang} to ${targetLang}:`, text);
        
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

        const result = response.choices[0].message.content || text;
        console.log("Translation result:", result);
        return result;
    } catch (error) {
        console.error("Error translating medical input", error);
        throw error; // Propagate the error so we can handle it in the UI
    }
}