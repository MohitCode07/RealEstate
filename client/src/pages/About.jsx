import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl px-4 py-20 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-slate-800">
        About NestFinder
      </h1>
      <p className="mb-4 text-slate-700">
        NestFinder is a leading real estate platform that helps users buy, rent, and sell properties directly without broker fees. We connect owners and seekers in cities like Mumbai, Pune, Nashik, Lonavala, Kerala, and across Maharashtra.
      </p>
      <p className="mb-4 text-slate-700">
        To get started, sign up using the button in the top right corner. From your profile, you can create new listings, update personal details, and upload a profile picture. NestFinder simplifies real estate with smart tools and direct communication.
      </p>
      <p className="mb-4 text-slate-700">
        Whether you're searching for a home or looking to list one, NestFinder is your go-to destination to find the perfect match quickly and easily.
      </p>

      {/* Embedded Chatbot Iframe */}
      <div className="my-8">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/NdNblzLi_glM9SmYa8N9A"
          width="100%"
          style={{ height: "100%", minHeight: "700px" }}
          frameBorder="0"
        ></iframe>
      </div>

      <footer className="mt-8 text-center text-slate-700">
        <p>© 2024 NestFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
