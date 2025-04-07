import React from 'react';
import { TranscriptionStatus, TranslationStatus } from '@/types';

interface TranscriptDisplayProps {
  transcript: string;
  status: TranscriptionStatus | TranslationStatus; // Accept either type transcription or translation
  placeholder?: string;
  medicalTerms?: string[];
}

export default function TranscriptDisplay({
  transcript,
  status,
  placeholder = 'Transcript will appear here...',
  medicalTerms = [],
}: TranscriptDisplayProps) {
    
  // Determine if the status is recording, processing or an error
  const isRecording = status === 'recording';
  const isProcessing = status === 'processing' || status === 'translating';
  const isError = status === 'error';
  
 // Helper function to escape special regex characters
 const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Highlight medical terms in the transcript
const highlightMedicalTerms = (text: string, terms: string[]): string => {
  if (!terms.length) return text;

  let highlightedText = text;

  // Sort terms by length in descending order
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);

  for (const term of sortedTerms) {
    // Use regex
    const escapedTerm = escapeRegExp(term);
    const regex = new RegExp(`\\b(${escapedTerm})\\b`, 'gi');
    highlightedText = highlightedText.replace(
      regex,
      '<span class="bg-[#ffecb3] text-[#d67a00] px-1 rounded">$1</span>'
    );
  }
  return highlightedText;
};

  //Function to display the transcript with highlighted medical terms
  const displayTerms = transcript? (medicalTerms.length ? (
    <p className="whitespace-pre-wrap text-gray-700"
      dangerouslySetInnerHTML={{ __html: highlightMedicalTerms(transcript, medicalTerms) }}></p>
  ) : (
    <p className="whitespace-pre-wrap text-gray-700">{transcript}</p>
  )) : (
    <p className="text-gray-400 italic">{placeholder}</p>
  );


  return (
    <div className="min-h-[240px] border border-[#f0e0e0] rounded-lg p-4 bg-[#fefeff] relative shadow-inner">
      {displayTerms}
      
      {/* Status indicators */}
      {isRecording && (
        <div className="absolute top-3 right-3 flex items-center">
          <span className="flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-xs text-red-500 font-medium">Recording</span>
        </div>
      )}
      
      {isProcessing && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-lg shadow flex items-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#ff9aab] mr-3"></div>
        <span className="text-[#ff8496] font-medium">
          {status === 'translating' ? 'Translating...' : 'Processing...'}
        </span>
      </div>
      )}
      
      {isError && (
        <div className="absolute top-3 right-3 flex items-center">
          <span className="inline-flex rounded-full h-3 w-3 bg-yellow-500 mr-2"></span>
          <span className="text-xs text-yellow-600 font-medium">Error</span>
        </div>
      )}
    </div>
  );
}