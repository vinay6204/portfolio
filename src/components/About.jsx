import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col-reverse md:flex-row md:items-start gap-10'>
      <div className='flex-1'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm currently working as a Website Developer at Lock My College,
        Lucknow (since October 2026). I'm a Computer Science Engineering graduate from Babu Banarasi Das
        Northern India Institute of Technology, Lucknow, with hands-on
        experience in Data Science, Python, and full-stack web development
        using Django and Node.js. I enjoy turning real-world problems into
        working software — from AI-powered platforms and e-commerce systems
        to custom Shopify storefronts for live client businesses.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        During my Data Science internship at Softpro India, I worked
        hands-on with real-world datasets — cleaning, preprocessing, and
        running exploratory data analysis to extract insights that supported
        product quality decisions. On the development side, I've built and
        deployed a Flipkart-inspired e-commerce platform, an AI-powered
        travel app with chatbot-based trip planning, and customized Shopify
        themes across six live client stores.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I bring strong problem-solving and analytical thinking to every
        project, along with a collaborative approach to working with teams
        and clients. Outside of academics, I've competed at state and zonal
        level in basketball and placed in a Mathematics Olympiad — I like
        that same combination of discipline and quick thinking in my
        technical work too.
      </motion.p>
      </div>

      <motion.div
        variants={fadeIn("left", "spring", 0.2, 0.75)}
        className='mt-4 shrink-0 self-center md:self-start'
      >
        <div className='green-pink-gradient p-[2px] rounded-[20px] shadow-card'>
          <img
            src='/vinay-kumar.jpg'
            alt='Vinay Kumar, Full Stack Developer from Lucknow'
            width='280'
            height='280'
            loading='lazy'
            className='w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-[18px] object-cover'
          />
        </div>
      </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
