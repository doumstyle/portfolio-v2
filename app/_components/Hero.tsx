import React from "react"
import { Section } from "./Section";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "lib/utils";
import { Code } from "./Code";
import { Button } from "components/ui/button";
import { ArrowRight } from "./icons/ArrowRight";
import { downloadCV } from "./downloadCV";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-3 flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold">Mamadou AMADOU</h2>
        <h3 className="text-3xl font-caption">Software Developer</h3>
        <p className="text-base">
          I love technology in general and computer science in particular. I always wanted to know how things work so from an early age, I tinkered with a lot of tech, ranging from smartphones to game consoles, all to way to laptops and desktops. So I started my professional journey as a IT Support Technician, then I trained in basic Web development and today I'm a Fullstack Developer. Specializing in Javascript technologies (MERN Stack).
        </p>
        <div className="flex items-center gap-2">
          <p>Download my resume here</p> <ArrowRight/>
          <Button variant={"outline"} size={"icon"} onClick={downloadCV}>CV</Button>
        </div>
      </div>
      <div className="flex-2 w-full max:md:m-auto ml-auto">
        <Image
          src={profile}
          alt="Mamadou's picture"
          className="w-full h-auto rounded-full max-w-xs mx-md:w-56"
        />
      </div>
    </Section>
  );
};
