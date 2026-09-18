import React, { useRef } from "react";
import emailjs from "emailjs-com";
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

  const inputClass =
    "w-full p-3.5 rounded-xl bg-[#e0d4cd] text-[#012924] placeholder-[#012924]/50 border border-transparent focus:outline-none focus:border-[#989a12] focus:ring-1 focus:ring-[#989a12]";

  return (
    <div className="w-full min-h-screen bg-[#e0d4cd] pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="w-full px-5 md:px-20">
        <h1 className="text-3xl md:text-5xl text-black font-bold tracking-tight pb-5 md:pb-6 border-b border-zinc-500">
          Get in Touch
        </h1>
      </div>

      <div className="w-full px-5 md:px-20 mt-8 md:mt-10">
        <div className="mx-auto w-full max-w-2xl rounded-3xl bg-[#004D43] text-[#e0d4cd] px-6 py-7 md:px-10 md:py-9">
          <p className="text-sm md:text-base text-center mb-6">
            Have a project in mind? Let’s collaborate 🚀
          </p>

          {/* Resume Download Button */}
          <div className="flex justify-center mb-7">
            <a
              href={resume}
              download="Rahul_Panwar_Resume.pdf"
              className="inline-block px-6 py-2 text-sm font-semibold text-[#e0d4cd] border-2 border-[#e0d4cd] rounded-full transition-all duration-300 hover:bg-[#e0d4cd] hover:text-[#004D43]"
            >
              Download Resume 📄
            </a>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className={`${inputClass} h-32 resize-none`}
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#e0d4cd] text-[#004D43] font-semibold rounded-xl transition-all duration-300 hover:bg-white"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
