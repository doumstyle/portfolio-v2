import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type ProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const Project = (props: ProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-2 rounded"
      target="_blank"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={20} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
