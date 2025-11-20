import { Button, buttonVariants } from "@components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@lib/utils";
import { LinkedinIcon } from "./icons/LinkeinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0  bg-background/85 backdrop-blur-sm border-b-primary border-b-2">
      <Section className="py-4 flex items-baseline">
        <h1 className="text-2xl font-bold text-primary">
          <Link href="https://portfolio-v2-two-mu.vercel.app/">Mamadou</Link>
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/doumstyle"
            className={cn(buttonVariants({ variant: "link" }), "size-6 p-0")}
          >
            <GithubIcon size={24} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/mamadouamadou"
            className={cn(buttonVariants({ variant: "link" }), "size-6 p-0")}
          >
            <LinkedinIcon size={24} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
