"use client";

import React from "react";
import Button from "../../components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import icon from "@/app/asset/svg/heroicon.svg";
import leftIcon from "@/app/asset/svg/icon.svg";
import wave from "@/app/asset/svg/herowave.svg";
import leftWave from "@/app/asset/svg/wave.svg";
import vector from "@/app/asset/svg/vector.svg";
import SocialProof from "../SocialProof";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export const Hero = () => {
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };
  return (
    <section className="hero container mx-auto relative flex flex-col items-center text-center w-full lg:mb-8 px-4">
      <div className="relative z-10">
      <motion.div 
          animate={floatingAnimation}
          className="absolute top-[4rem] left-[-10rem] justify-between hidden lg:block"
        >
          <Image src={icon} alt="icon" className="" />
        </motion.div>
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-[4rem] right-[-10rem] justify-between hidden lg:block"
        >
          <Image src={leftIcon} alt="icon" />
        </motion.div>
        <h1 className="text-[48px] tracking-tighter lg:text-[64px] pt-8 lg:pt-6 text-center flex-wrap">
        Automate Your <br className="hidden lg:block" /> 
        <span className="inline-flex">
          <ContainerTextFlip words={["Institution", "University", "School", "Coaching"]} />
          {" "}Scheduling
        </span>
        </h1>
        <motion.div 
          animate={floatingAnimation}
          className="absolute bottom-[5rem] left-[-1rem] justify-between hidden lg:block"
        >
          <Image src={wave} alt="icon" />
        </motion.div>
        <motion.div 
          animate={floatingAnimation}
          className="absolute bottom-[4rem] right-[-1rem] justify-between hidden lg:block"
        >
          <Image src={leftWave} alt="icon" />
        </motion.div>
        <p className="pt-12 text-[18px] md:text-xl mb-8 text-[#D4D4D4] flex-wrap px-6 lg:px-0">
        Specialized tool created to streamline the scheduling process.
        </p>
         <a href="https://getwaitlist.com/waitlist/27738" target="_blank">
            <Button className="w-auto" size="large">{`Join Waitlist`}</Button>
            </a>
        <div className="relative py-6">
          <div className="absolute right-[50%]">
            <Image src={vector} alt="vector" />
          </div>
          <p className="pt-12 text-[14px] font-medium text-[#D4D4D4] pl-6 rotate-[-25deg]">
            Get early access!
          </p>
        </div>
      </div>
      <SocialProof />
    </section>
  );
};

export default Hero;
