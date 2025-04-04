import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import resume from '../assets/resume.pdf';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vms4dha",
        "template_eafveky",
        form.current,
        "uKQrDmSmU3OS7lNM3"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((err) => console.error("FAILED...", err));
  };

  return (
    <div className="relative min-h-screen p-1.5 pt-25 flex items-center justify-center bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contact Box */}
      <div className="relative z-10 w-full max-w-2xl p-9 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-md text-center text-gray-700 mb-6">
          Have a project in mind? Let’s collaborate!🚀
        </p>

        {/* Resume Download Button */}
        <div className="flex justify-center mb-6">
          <a
            href={resume}
            download
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume 📄
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
