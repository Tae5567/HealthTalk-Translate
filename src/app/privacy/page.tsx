//Privacy Policy
'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 bg-[#fefaf6]">
      <div className="max-w-3xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
            Privacy Policy
          </h1>
          <p className="mt-2 text-center text-gray-600">
            How we handle your data
          </p>
        </header>

        <div className="bg-white rounded-lg p-6 shadow-md border border-[#f0e0e0]">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Collection</h2>
            <p className="text-gray-700 mb-3">
              Health Talk Translation is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, and safeguard your information when you use our service.
            </p>
            <p className="text-gray-700">
              This app collects the following data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Audio recordings during active transcription sessions</li>
              <li>Text transcriptions of your speech</li>
              <li>Selected language preferences</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Data</h2>
            <p className="text-gray-700 mb-3">
              The data we collect is used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Converting speech to text transcriptions</li>
              <li>Translating text between languages</li>
              <li>Improving the accuracy of medical terminology recognition</li>
              <li>Providing text-to-speech playback of translations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Storage and Security</h2>
            <p className="text-gray-700 mb-3">
              This prototype application processes data in real-time and does not permanently store your voice recordings, 
              transcripts, or translations on our servers. However, please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Audio data is temporarily processed by Web Speech API</li>
              <li>Transcriptions and translations are temporarily processed by OpenAI&apos;s API</li>
              <li>Data is transmitted using secure HTTPS connections</li>
              <li>No user accounts or personal information are collected or stored</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Services</h2>
            <p className="text-gray-700 mb-3">
              Our application uses the following third-party services to provide functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Web Speech API (for speech recognition)</li>
              <li>OpenAI API (for translation and medical terminology enhancement)</li>
              <li>Browser&apos;s Speech Synthesis capabilities (for text-to-speech)</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Each of these services has their own privacy policies governing how they handle data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Important Healthcare Disclaimer</h2>
            <p className="text-gray-700">
              This application is a prototype and should not be relied upon for critical healthcare information. 
              Translation accuracy cannot be guaranteed, especially for complex medical terminology. Always verify 
              important medical information with qualified healthcare professionals and certified medical interpreters.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this privacy policy or the handling of your data, 
              please contact us at privacy@healthtalktranslation.example.com
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
        <p>Health Talk Translation Web App | Prototype</p>
        <p className="mt-3">
          <Link href="/" className="text-[#ff9aab] hover:text-[#ff8496]">
            Home
          </Link>
          {' • '}
          <Link href="/about" className="text-[#ff9aab] hover:text-[#ff8496]">
            About
          </Link>
        </p>
      </footer>
    </main>
  );
}