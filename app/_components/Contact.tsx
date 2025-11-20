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
          image="/portrait.png"
          name="Mamadou A."
          mediumImage="/email.svg"
          description="Email Me!"
          width={60}
          height={60}
        />
        <ContactCard
          url="https://linkedin.com/in/mamadouamadou"
          image="/portrait.png"
          name="Mamadou A."
          mediumImage="/linkedin.png"
          description="Let's Connect!"
          width={60}
          height={60}
        />
      </div>
    </Section>
  );
};
