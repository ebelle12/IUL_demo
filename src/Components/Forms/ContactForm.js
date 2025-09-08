import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ templateId }) {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iqg6uo4", // replace with your EmailJS service ID
        templateId,
        form.current,
        "ryqslutikQJ3lvbap" // replace with your EmailJS user ID
      )
      .then(
        (result) => setStatus("Message sent successfully!"),
        (error) => setStatus("Failed to send message.")
      );
    e.target.reset();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded shadow">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </div>
  );
}

export default ContactForm;
