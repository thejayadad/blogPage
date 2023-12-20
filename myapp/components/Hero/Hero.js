'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import SignUpForm from '../forms/SignUpForm/SignUpForm';

const Hero = () => {
  return (
    <section className='text-primary'>
      <div className='container px-5 py-24 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col text-center w-full mb-12'
        >
            <div className='flex flex-col items-center'>
            <h1 className='sm:text-4xl text-3xl font-bold  title-font mb-2 text-black'>
            Welcome to OnlineReporters
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base mb-4'>
            The Online Space Where A Fan Can Be A Fan
          </p>
          <div class="w-16 h-1 rounded-full mb-4 bg-litePurple"></div>
            </div>
        <SignUpForm  />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
