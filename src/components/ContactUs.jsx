import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/https://formspree.io/f/xjkwkdkd', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending message', error);
      alert('Something went wrong, please try again!');
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-gradient-to-b from-pink-50 via-rose-50 to-white px-6">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-pink-700">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We have received your information. We will contact you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-pink-50 via-rose-50 to-white px-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-pink-700">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </motion.div>
          )}

          <div className="flex justify-between">
            {step > 1 && <button type="button" onClick={prev} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300">Back</button>}
            {step < 3 && (
              <button
                type="button"
                onClick={next}
                className="ml-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 transition duration-300"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="ml-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 transition duration-300"
              >
                Send
              </button>
            )}
          </div>
        </form>
      </div>

      {/* WhatsApp Button */}
      {/*<a
        href="https://wa.me/3007818912"  // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-3xl flex items-center justify-center hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp />
      </a>*/}
    </section>
  );
}
