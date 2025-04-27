import React from "react";
import click from '@/app/asset/svg/click.svg';
import Image from "next/image";

const CreateDas = () => {
  return (
    <a href="https://getwaitlist.com/waitlist/27738" target="_blank" className="block">
      <div className="w-full bg-white cursor-pointer overflow-hidden">
        <div className="relative bottom-0 left-0 w-full md:h-[347px] bg-white text-black text-[80px] lg:text-[233px] overflow-hidden whitespace-nowrap">
          <p className="inline-block animate-marquee whitespace-nowrap ">
            Join the Waitlist
          </p>
          <div className="absolute right-[50%] bottom-4">
            <Image src={click} alt="mouse icon" className="w-[83px] h-[60px]" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default CreateDas;
