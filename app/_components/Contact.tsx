import { Badge } from "components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I would be honored to work with you.
      </h2>

      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          url="mailto:mamadou.amadou@ngatte.tech"
          image="/portrait.jfif"
          name="Mamadou A."
          mediumImage="/email.svg"
          description="Email Me!"
        />
        <ContactCard
          url="https://linkedin.com/in/mamadouamadou"
          image="/portrait.jfif"
          name="Mamadou A."
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Flinkedin%2Flogo-linkedin-icon-1536.png&f=1&nofb=1&ipt=b3056af33474d51db5e4201c586f3cf2cb53cc01c7475630ecd7148a1ccf0929&ipo=images"
          description="Let's Connect!"
        />
      </div>
    </Section>
  );
};
