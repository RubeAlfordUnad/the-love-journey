import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import journeyImage from "../images/logo-Photoroom.png"; // your logo

const steps = [
  {
    title: "Interview Process",
    description: "Tell us about yourself, your interests, and what you’re looking for.",
  },
  {
    title: "Journey Setup", 
    description: "From our private database, we analyze compatibility to connect you with meaningful matches according to your profile.",
  },
  {
    title: "Start Your Journey",
    description: "This is your first meeting, connect, and begin your unique love story with confidence. We’re gonna be there for you, providing support and guidance throughout the process.",
  },
];

export default function Timeline() {
  return (
    <div className="bg-pink-50 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left side (Steps) */}
        <div className="flex-1 space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left mb-12 text-pink-700">
            Your Love Journey
          </h2>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-pink-500 mt-1">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-800">{step.title}</h3>
                <p className="text-pink-700 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side (Floating Image) */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <motion.img
            src={journeyImage}
            alt="Love Journey"
            className="w-full max-w-sm rounded-3xl shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </div>
  );
}
