import { Badge } from "@/components/ui/badge";
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
          url="mailto:https://mamadou.ngatte@outlook.fr"
          image="https://media.licdn.com/dms/image/D4E03AQG37SPLLJ8XOg/profile-displayphoto-shrink_200_200/0/1676637041426?e=1720051200&v=beta&t=XK7oVOQkkt83SyXT6vvacCunUZyxSfj4GKeKe3HojYE"
          name="Mamadou A."
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogolook.net%2Fwp-content%2Fuploads%2F2021%2F06%2FGmail-Logo.png&f=1&nofb=1&ipt=6da148e2b2028dc410e1589310fafa9efa80dcd022fca56b3383f901f02de9d6&ipo=images"
          description="Email Me!"
        />
        <ContactCard
          url="https://linkedin.com/in/mamadouamadou"
          image="https://media.licdn.com/dms/image/D4E35AQFSSkcjU1mO6A/profile-framedphoto-shrink_200_200/0/1676637043260?e=1715281200&v=beta&t=z5GxzXltOG-fm-ePGzG62GmcpN1pfMyMGvljFc7n93g"
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
      </div>
    </Section>
  );
};
