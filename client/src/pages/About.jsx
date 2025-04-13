import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Configure chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "pZ9tSWXSlkecay-yK2Izi",
      domain: "www.chatbase.co",
    };

    // Load the chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About NestFinder</h1>
      <p className="mb-4 text-slate-700">
        NestFinder is a leading real estate platform that helps users buy, sell, and rent properties in top neighborhoods. Our platform is designed to simplify the property search experience while promoting direct communication between property owners and seekers—eliminating the need for brokers.
      </p>
      <p className="mb-4 text-slate-700">
        Our mission is to empower users by providing expert tools, personalized features, and a streamlined process for all their real estate needs. Whether you're a landlord looking to list a property or a tenant searching for a new home, NestFinder supports you every step of the way.
      </p>
      <p className="mb-4 text-slate-700">
        We’re committed to creating a transparent, efficient, and user-friendly platform. With an intuitive interface, easy listing management, and integrated chatbot support, NestFinder is here to make your real estate journey hassle-free and rewarding.
      </p>
      <footer className="mt-8 text-center text-slate-700">
        <p>© 2024 NestFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
