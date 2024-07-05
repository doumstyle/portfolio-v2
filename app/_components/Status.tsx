import { Card } from "components/ui/card";
import { Section } from "./Section";
import {
  Film,
  HandPlatter,
  HomeIcon,
  Joystick,
  MessageSquareQuote,
} from "lucide-react";
import { Sideproject, SideProjectProps } from "./Sideproject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full flex flex-col gap-2 p-4 mt-4">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <Sideproject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="w-full p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>

        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://linkedin.com/in/mamadouamadou"
            image="/portrait.jfif"
            name="Mamadou A."
            mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Flinkedin%2Flogo-linkedin-icon-1536.png&f=1&nofb=1&ipt=b3056af33474d51db5e4201c586f3cf2cb53cc01c7475630ecd7148a1ccf0929&ipo=images"
            description="Let's Connect!"
          />
          <ContactCard
            url="https://x.com/mamadoungatt"
            image="https://pbs.twimg.com/profile_images/723450911373275136/Iv7kc6m-_400x400.jpg"
            name="@MamadouNgatt"
            mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.punchng.com%2Fwp-content%2Fuploads%2F2023%2F07%2F24084806%2FTwitter-new-logo.jpeg&f=1&nofb=1&ipt=824bfde5b59be79d0da639b4f647bfb798770e0dc1611acaa23cbfdf73ada48c&ipo=images"
            description="Follow Me!"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: HandPlatter,
    title: "Restaurants Rating",
    description:
      "Angular app using Google API to display on a map nearby restaurants with a rating system.",
    url: "/",
  },
  {
    Logo: Joystick,
    title: "Turn-based Game",
    description:
      "Javascript app to create a game where opponents fight each over on a board with obstacles and weapons.",
    url: "/",
  },
  {
    Logo: MessageSquareQuote,
    title: "Quotes Generator",
    description:
      "Javascript app to create a random generator of quotes from bits of sentences",
    url: "/",
  },
  {
    Logo: Film,
    title: "Film Festival",
    description:
      "Wordpress to create a site to book tickets for a summer film festival in Paris parks",
    url: "/",
  },
  {
    Logo: HomeIcon,
    title: "Chalets & Caviar",
    description:
      "Wordpress to create a site to rent/buy luxurious chalets in the French Alps city of Courchevel.",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQHBuXTCD__FGA/company-logo_100_100/0/1690558903087/fleet_computer_logo?e=1721865600&v=beta&t=niEKPV3GgVdy-XVaHQCthJq8mdYjWuknajaKNFDVALs",
    title: "Fleet",
    role: "Web Developer",
    date: "2021 - 2022",
    url: "https://www.fleet.co",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQEeQnntAFmQrA/company-logo_100_100/0/1705314256523/amexgbtneo_logo?e=1721865600&v=beta&t=aRB9_uvlW0wGsRzFOeHb2Lxqyq1rAOymfv-C6tjlZR8",
    title: "KDS",
    role: "Software Engineer",
    date: "2020 - 2020",
    url: "https://www.amexglobalbusinesstravel.com/fr/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQHQBLt0D7Pa1g/company-logo_100_100/0/1630578274665/it_ce_informatique_et_technologies___caisse_depargne_logo?e=1721865600&v=beta&t=SY8S8uL5oVx9lCOo0P9jrTHkxT2aPndoVPgwfIDDwAY",
    title: "IT-CE",
    role: "Frontend Developer",
    date: "2018 - 2019",
    url: "https://groupebpce.com/",
    internship: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQFSPsCKDQ-lvQ/company-logo_100_100/0/1697789289882/valtech_logo?e=1721865600&v=beta&t=kcMkw1HjmhAz79JTUCJF1a8U7rsQiYu8_mdeqEeZOtQ",
    title: "Valtech",
    role: "IT Support Technician",
    date: "2014 - 2016",
    url: "https://groupebpce.com/",
    internship: true,
  },
];
