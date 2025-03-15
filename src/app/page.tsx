'use client';

import React from 'react';
import { languages } from '@/types';

export default function Home() {
  const [sourceLanguage, setSourceLanguage] = React.useState(languages[0].code);
  const [targetLanguage, setTargetLanguage] = React.useState(languages[1].code);

  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Health Talk Translation App
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Real-time translation for healthcare providers and patients
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Source Language Panel */}
        <div className="border rounded-lg p-4 bg-white shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Original</h2>
            <select
              className="border rounded px-3 py-1"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="min-h-[200px] border rounded p-3 bg-gray-50">
            {/* Transcript will go here */}
            <p className="text-gray-500 italic">Transcript will appear here...</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            >
              Start Recording
            </button>
          </div>
        </div>

        {/* Target Language Panel */}
        <div className="border rounded-lg p-4 bg-white shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Translation</h2>
            <select
              className="border rounded px-3 py-1"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="min-h-[200px] border rounded p-3 bg-gray-50">
            {/* Translation will go here */}
            <p className="text-gray-500 italic">Translation will appear here...</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
              disabled
            >
              Speak Translation
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Health Talk Translation Web App</p>
      </footer>
    </main>
  );
}