import { Section } from "./Section";
import { Badge } from "@components/ui/badge";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>

      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} className="animate-none" />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can make <u>beautiful</u> applications <i>in seconds</i> using{" "}
            <Code>TailwindCSS</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
