import Image from "next/image";
import React from "react";
import pm from "@/app/asset/svg/pm.svg";
import avater from "@/app/asset/svg/developer.svg";
import one from "@/app/asset/svg/one.svg";
import two from "@/app/asset/svg/two.svg";
import three from "@/app/asset/svg/three.svg";
import container from "@/app/asset/svg/solution.svg";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";


const Problem = () => {
  return (
    <section className="lg:container mx-auto flex flex-col lg:items-center text-center lg:px-2 font-[Figtree] relative">
      <div className="mb-8 flex flex-col justify-center items-center text-center px-4 relative">
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(-10%, 50%)",
            width: "100%",
            height: "24px",
            background: "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.37))",
            filter: "blur(37.5px)",
            zIndex: "-1",
            borderRadius: "12px",
          
          }}
        ></div>

        <h2>
          <span className="inline-flex">
          Stop the manual scheduling {""}
                    <ContainerTextFlip words={["chaos 😵‍💫", "headache 🤯", "stress 🧠"]} />
                  </span>
         
        </h2>

        <p className="text-[18px] lg:text-xl font-medium text-gray-300 max-w-[679.46px] text-center px-2 pb-6 lg:pb-0 relative">
        Coordinating teacher availability, classroom assignments, and departmental needs shouldn’t take up your whole week.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:items-center lg:justify-center gap-12 lg:py-16 px-4">
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-[22px] font-medium text-[#D4D4D4] lg:text-left">
          Is this you every time you are creating a new schedule?
          </h3>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={one} alt="one" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4] text-wrap">
            Chasing down teachers who are already overwhelmed
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={two} alt="two" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4] text-wrap">
            Waiting days (or even weeks) for a simple schedule update
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={three} alt="three" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4]">
            Manually copying and pasting data between sheets and systems
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-2">
        <Image src={container} alt="box" />
        </div>
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="text-[22px] lg:text-[28px]">
          Meanwhile, decisions need to be made, stakeholders are waiting, and your
          valuable resources and time is being wasted on timetabling setup instead of product
          strategy.
        </p>
      </div>
    </section>
  );
};

export default Problem;
