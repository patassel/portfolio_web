'use client';
import React, { useState } from 'react';

export default function Page() {
  const [effect, setEffect] = useState(false);

  const [textAreaValue, setTextareaValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameValue(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameValue(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('First name ===> ', firstNameValue);
    console.log('Last name ===> ', lastNameValue);
    console.log('Email ===> ', emailValue);
    console.log('Message ===> ', textAreaValue);

    // Appeler fonction envoie mail à patasseldev@gmail.com
    /*
    Objet: Contact Us patasselPortfolio by firstname + lastname
    Content: 
      Sender ==> emailValue 
      message:
      textaeraValue
    */
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstNameValue,
          lastName: lastNameValue,
          email: emailValue,
          message: textAreaValue,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Email envoyé avec succès !');
      } else {
        alert("Erreur lors de l'envoi du mail !");
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full p-6 bg-darkGreen rounded-lg shadow-lg shadow-violet-600 border-2 border-violet-950">
        <h1 className="text-3xl font-bold mb-6 text-center ">Contact Me</h1>
        <div className="mb-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              onChange={handleFirstNameChange}
              className="w-full px-4 py-2 bg-blue-100 text-black rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last name"
              onChange={handleLastNameChange}
              className="w-full px-4 py-2 bg-blue-100 text-black rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            className="w-full px-4 py-2 bg-blue-100 text-black rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Tell me your story"
            value={textAreaValue}
            onChange={handleTextareaChange}
            className="w-full px-4 py-2 bg-blue-100 text-black rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            style={{ height: 'auto', minHeight: '200px' }}
          ></textarea>
        </div>
        <button
          type="button"
          onClick={() => {
            setEffect(true);

            handleSubmit();
          }}
          className={`${
            effect && 'animate-wiggle'
          } w-full px-4 py-2 bg-violet-950 text-white rounded-lg hover:bg-green-600 focus:outline-none shadow-lg border-2 border-violet-950 `}
          onAnimationEnd={() => setEffect(false)}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
