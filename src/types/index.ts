//Languages available to be translated

export interface Language {
    code: string;
    name: string;
    voiceName?: string; //For text-to-speech
}

//Available laguages for translation
export const languages: Language[] = [
    {code: 'en', name: 'English'},
    {code: 'fr', name: 'French'},
    {code: 'yo', name: 'Yoruba'},
    {code: 'ig', name: 'Igbo'},
    {code: 'es', name: 'Spanish'},
    {code: 'du', name: 'Dutch'},
    {code: 'it', name: 'Italian'},
    {code: 'ja', name: 'Japanese'},
    {code: 'ko', name: 'Korean'},
    {code: 'pt', name: 'Portuguese'},
    {code: 'ha', name: 'Hausa'},
    {code: 'ar', name: 'Arabic'},
    {code: 'zh', name: 'Chinese'},
];

//Transcription status
export type TranscriptionStatus = 'idle'| 'recording' | 'completed' | 'error';

//Translation status
export type TranslationStatus = 'idle' | 'translating' | 'completed' | 'error';