'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Timelith" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The <span className="font-extrabold text-white">Timelith Scheduler</span> is a specialized tool created to 
        {' '}
        <span className="font-extrabold text-white">
        to improve the scheduling process 
        </span>{' '}
        for educational institutions. It automates the generation of 
timetables, addressing the common challenges of manual scheduling, such as {' '}
<span className="font-extrabold text-white"> conflicts and 
inefficiencies.</span>{' '} The system is designed to handle complex scheduling requirements by 
considering factors like room availability, instructor schedules, and course constraints.{' '} <br></br>
With a focus on simplicity, the Super Scheduler offers an intuitive interface that makes it easy for administrative staff to use. 
It ensures that data is managed {' '}
<span className="font-extrabold text-white"> securely and integrates smoothly </span>{' '} with existing institutional systems, allowing for a seamless transition and consistent data flow.
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
