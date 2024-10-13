import React from "react";
import { motion } from "framer-motion";
import { FaGg, FaCode } from "react-icons/fa"; // GeeksforGeeks and LeetCode icons

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Explore More</p>
          <h2 className={styles.sectionHeadText}>Download My Resume.</h2>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className='mt-6 flex justify-center'
          variants={fadeIn("up", "spring", 0.3, 0.75)}
        >
          <a
            href="/Update Resume University Format Aug 24.pdf" // Link to the PDF file in the public directory
            download
            className='px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
          >
            Download Resume
          </a>
        </motion.div>


        <motion.div
          className='mt-8 flex flex-col items-start w-full'
          variants={fadeIn("up", "spring", 0.3, 0.75)}
        >
          <p className='text-white text-xl font-bold'>Explore My Coding Journey</p>
          <div className='flex w-full gap-4 mt-4 justify-center'>
            <a
              href="https://www.geeksforgeeks.org/user/amanrahangdale2022/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center text-green-500 hover:text-green-400 transition duration-300'
            >
              <FaGg className='mr-2' />
              GeeksforGeeks
            </a>


            <a
              href="https://leetcode.com/u/amanrahangdale2022/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center text-blue-500 hover:text-blue-400 transition duration-300'
            >
              <FaCode className='mr-2' />
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
