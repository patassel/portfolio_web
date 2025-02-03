'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p>
        Welcome to <strong>Kitty Scanner Pro</strong>. Your privacy is important
        to us. This Privacy Policy explains how we collect, use, and protect
        your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Scanned document data (not stored on our servers).</li>
        <li>Usage analytics (anonymized data for app improvement).</li>
        <li>Contact information if you reach out for support.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. How We Use Your Data
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>To enhance document scanning and OCR processing.</li>
        <li>To improve AI-powered text recognition and summarization.</li>
        <li>To provide customer support and resolve issues.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Security Measures</h2>
      <p>
        We implement industry-standard security measures to protect your data,
        including encryption and secure storage.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Third-Party Services
      </h2>
      <p>
        We do not sell or share your data with third parties. However, we
        integrate with cloud storage services (Google Drive, Dropbox) at your
        discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p>
        You have the right to access, modify, or delete your personal data.
        Contact us at{' '}
        <a
          href="mailto:patasseldev@gmail.com"
          className="text-blue-500 hover:underline"
        >
          support@kittyscannerpro.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Updates to This Policy
      </h2>
      <p>
        We may update this policy from time to time. Any changes will be posted
        on this page.
      </p>
    </div>
  );
}
