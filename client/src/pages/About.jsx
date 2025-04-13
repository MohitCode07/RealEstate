import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl px-4 py-20 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-slate-800">
        About NestFinder
      </h1>
      <p className="mb-4 text-slate-700">
        NestFinder is a leading real estate agency that specializes in helping
        clients buy, sell, and rent properties in the most desirable
        neighborhoods. Our team of experienced agents is dedicated to providing
        exceptional service and making the buying and selling process as smooth
        as possible.
      </p>
      <p className="mb-4 text-slate-700">
        Our mission is to help our clients achieve their real estate goals by
        providing expert advice, personalized service, and a deep understanding
        of the local market. Whether you are looking to buy, sell, or rent a
        property, we are here to help you every step of the way.
      </p>
      <p className="mb-4 text-slate-700">
        Our team of agents has a wealth of experience and knowledge in the real
        estate industry, and we are committed to providing the highest level of
        service to our clients. We believe that buying or selling a property
        should be an exciting and rewarding experience, and we are dedicated to
        making that a reality for each and every one of our clients.
      </p>

      {/* Embedded Chatbot */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          🤖 Have questions? Chat with us!
        </h2>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/rCZdFXfv7cALo2uno02PO"
          width="100%"
          style={{ height: "100%", minHeight: "700px" }}
          frameBorder="0"
          title="NestFinder Chatbot"
        ></iframe>
      </div>

      <footer className="mt-8 text-center text-slate-700">
        <p>© 2024 NestFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
