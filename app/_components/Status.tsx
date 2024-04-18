import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, Landmark, Laptop, LucideIcon, Plane } from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="w-full p-4 flex-1">Work</Card>
        <Card className="w-full p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS = [
  {
    Logo: Code,
    title: "",
    description: "",
  },
  {
    Logo: Laptop,
    title: "",
    description: "",
  },
  {
    Logo: Landmark,
    title: "",
    description: "",
  },
  {
    Logo: Plane,
    title: "",
    description: "",
  },
];

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const Sideproject = (props: SideProjectProps) => {
  return (
    <Link href={props.url}>
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.logo />
      </span>
      <div>
        <p className="text-lg font-semibold">
          <props.title />
        </p>
        <p className="text-sm text-muted-foreground">
          <props.description />
        </p>
      </div>
    </Link>
  );
};
