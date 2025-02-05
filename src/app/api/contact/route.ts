import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'patasseldev@gmail.com', // Ton adresse Gmail
        pass: 'plzu nsam yrlb vmrw', // Mot de passe ou App Password
      },
    });

    // Construire le mail
    const mailOptions = {
      from: email, // L'expéditeur est l'email du formulaire
      to: 'patasseldev@gmail.com', // Ton adresse pour recevoir les messages
      subject: `Contact Us patasselPortfolio by ${firstName} ${lastName}`,
      text: `Sender ==> ${email}\n\nMessage:\n${message}`,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email envoyé !' });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
