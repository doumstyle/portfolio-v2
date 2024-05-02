import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  internship?: boolean;
};
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-3 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        className="h-10 w-10 object-contain rounded"
        src={props.image}
        alt={props.title}
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.internship && <Badge variant="outline">Internship</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
