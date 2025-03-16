//About Page
'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 bg-[#fefaf6]">
      <div className="max-w-3xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
            About Health Talk Translation
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Breaking language barriers in healthcare
          </p>
        </header>

        <div className="bg-white rounded-lg p-6 shadow-md border border-[#f0e0e0]">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              Health Talk Translation aims to bridge the communication gap between healthcare providers and patients 
              who speak different languages. We believe that everyone deserves access to quality healthcare, 
              regardless of the language they speak.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h2>
            <p className="text-gray-700 mb-4">
              Our application uses advanced speech recognition and AI-powered translation to facilitate real-time 
              communication between people speaking different languages:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Speak in your native language</li>
              <li>Our app transcribes your speech in real-time</li>
              <li>AI translates the text to the target language</li>
              <li>The translated text can be read or played back as speech</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Medical Terminology</h2>
            <p className="text-gray-700">
              We have specially optimized our system to handle medical terminology accurately. Our AI models are 
              trained to recognize and correctly translate medical terms, symptoms, and healthcare instructions,
              helping to ensure critical information is communicated correctly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Limitations</h2>
            <p className="text-gray-700">
              While our application strives for accuracy, it should not replace professional medical interpreters 
              for critical or emergency situations. Always verify important medical information and consult with 
              qualified healthcare professionals.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="bg-[#ff9aab] hover:bg-[#ff8496] text-white rounded-full px-6 py-2 inline-block shadow-sm transition-colors duration-200"
          >
            Return to Translator
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>Healthcare Translation Web App | Prototype</p>
        <p className="mt-3">
          <Link href="/" className="text-[#ff9aab] hover:text-[#ff8496]">
            Home
          </Link>
          {' • '}
          <Link href="/privacy" className="text-[#ff9aab] hover:text-[#ff8496]">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </main>
  );
}