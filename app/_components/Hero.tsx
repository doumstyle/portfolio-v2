import { Section } from "./Section";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Code } from "./Code";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { FrenchFlagIcon } from "./icons/FrenchFlagIcon";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold">Mamadou AMADOU</h2>
        <h3 className="text-3xl font-caption">Software Developer</h3>
        <p className="text-base">
          I love coding projects with{" "}
          <Code>
            <span>
              <YoutubeIcon
                size={16}
                className="inline-flex items-center gap-1 mr-1"
              />
            </span>
            Youtube
          </Code>{" "}
          creators to learn new concepts. Currently looking for new
          opportunities. Based in{" "}
          <Code>
            <FrenchFlagIcon
              size={16}
              className="inline-flex items-center gap-1 mr-1"
            />
            France
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] w-full max:md:m-auto ml-auto">
        <Image
          src={profile}
          alt="Mamadou's picture"
          className="w-full h-auto rounded-full max-w-xs mx-md:w-56"
        />
      </div>
    </Section>
  );
};
