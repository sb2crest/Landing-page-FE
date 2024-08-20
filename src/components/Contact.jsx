/* eslint-disable no-unused-vars */
import React from "react";
import bg_1 from "../assets/images/bg-2.jpg";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbzajlv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    }
  };

  return (
    <div className="relative flex items-start p-10 bg-black">
      <div className="relative flex-shrink-0 w-1/2">
        <img
          src={bg_1}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-baseline pt-36 text-white bg-black bg-opacity-70 p-6">
          <h1 className="text-4xl font-extrabold uppercase">
            <span className="text-[#E65100]">Get in Touch </span>
            With us
          </h1>
          <p className="text-lg mt-4">
            Have some big idea or brand to develop and need help!
            <br /> Then reach out we would love to hear about your project and
            provide help.
          </p>
        </div>
      </div>

      <div className="w-1/2 p-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full text-gray-800 py-2.5 px-4 border text-sm outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full text-gray-800 py-2.5 px-4 border text-sm outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full text-gray-800 py-2.5 px-4 border text-sm outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full text-gray-800 px-4 border text-sm pt-2.5 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white bg-[#E65100] text-sm px-4 py-2 uppercase mt-6"
          >
            Contact us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
