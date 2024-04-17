import { Section } from "./Section";
import profile from "../../public/profile.jpg"
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 border-accent hover:bg-accent/50 p-1 rounded-sm text-primary font-mono")} {...props} />
}

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl font-bold">Mamadou AMADOU</h2>
        <h3 className="text-3xl font-caption">Software Developer</h3>
        <p className="text-base">I love coding projects with {" "}
          <Code className="inline-flex items-center gap-1">Youtube</Code> creators to learn new concepts. Currently looking for new opportunities.
        </p>
      </div>
      <div className="flex-1">
        <Image src={profile} alt="Mamadou's picture" className="w-full h-auto rounded-full max-w-xs" />
      </div>
    </Section>
  )
};
