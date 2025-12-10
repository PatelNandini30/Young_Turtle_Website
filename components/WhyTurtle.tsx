import React from 'react';
import { motion } from 'framer-motion';
import { Turtle } from 'lucide-react';

const WhyTurtle: React.FC = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary to-neutralDark">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-4 rounded-full border border-secondary/20 bg-secondary/5"
      >
        <Turtle className="w-12 h-12 text-secondary" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-serif text-3xl md:text-4xl text-white mb-6"
      >
        Why "Young Turtle"?
      </motion.h2>

      <motion.div
        initial={{