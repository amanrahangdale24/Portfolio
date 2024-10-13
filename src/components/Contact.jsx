import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaEnvelope, FaGg, FaInstagram } from "react-icons/fa"; // 

import { SectionWrapper } from "../hoc";``

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <div className='mt-12 flex flex-row justify-center gap-8'>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/aman-rahangdale577a30250"
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 text-[40px] hover:text-blue-600 transition duration-300'
          >
            <FaLinkedin />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:amanrahangdale543@gmail.com"
            className='text-red-500 text-[40px] hover:text-red-600 transition duration-300'
          >
            <FaEnvelope />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/amanrahangdale543/"  
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 text-[40px] hover:text-pink-600 transition duration-300'
          >
            <FaInstagram />
          </a>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
