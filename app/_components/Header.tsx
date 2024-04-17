import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkeinIcon"
import { TwitterIcon } from "./icons/TwitterIcon"

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          doumstyle.github.io
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link href="https://github.com/doumstyle" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link href="https://linkedin.com/in/mamadouamadou" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
          <Link href="https://twitter.com/mamadouNgatt" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
            <TwitterIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  )
}