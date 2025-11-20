import { Card } from "@components/ui/card";
import { Section } from "./Section";
import { HardHat, Languages, Shirt } from "lucide-react";
import { Project, ProjectProps } from "./Project";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-3 w-full">
        <Card className="w-full flex flex-col gap-2 p-4 mt-4">
          <p className="text-lg text-muted-foreground">Latest projects</p>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((project, index) => (
              <div key={index} className="flex justify-between group">
                <Project
                  Logo={project.Logo}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-2 flex flex-col gap-4 w-full">
        <Card className="w-full p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

const PROJECTS: ProjectProps[] = [
  {
    Logo: Shirt,
    title: "KentRow",
    description: "Ecommerce website for selling clothes.",
    url: "https://www.kentrow.com",
  },
  {
    Logo: Languages,
    title: "Ekkitugol",
    description: "Languages learning app akin to Duolingo but for Pulaar",
    url: "https://ekkitugol.ngatte.tech",
  },
  {
    Logo: HardHat,
    title: "SD Consulting Europa",
    description:
      "Health Safety and Environment (HSE) website for training employees and recruting people trained in HSE",
    url: "https://www.sd-consulting.net",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "/10mw.jpg",
    title: "10MentionWeb",
    role: "Fullstack Developer",
    date: "2024 - 2025",
    url: "https://www.10mentionweb.org/",
    width: 60,
    height: 60,
  },
  {
    image: "/fleet_newLogo.png",
    title: "Fleet",
    role: "Web Developer",
    date: "2021 - 2022",
    url: "https://www.fleet.co",
    width: 60,
    height: 60,
  },
  {
    image: "/logo_AmexGBT.png",
    title: "KDS now Amex GBT",
    role: "Software Engineer",
    date: "2020 - 2020",
    url: "https://www.amexglobalbusinesstravel.com/fr/",
    width: 60,
    height: 60,
  },
  {
    image: "/it_ce_logo.jpeg",
    title: "IT-CE",
    role: "Frontend Developer",
    date: "2018 - 2019",
    url: "https://groupebpce.com/",
    width: 60,
    height: 60,
    internship: true,
  },
  {
    image: "/logo_Valtech.png",
    title: "Valtech",
    role: "IT Support Technician",
    date: "2014 - 2016",
    url: "https://valtech.com/",
    width: 60,
    height: 60,
    internship: true,
  },
];
