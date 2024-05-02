import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 border-accent hover:bg-accent/50 p-1 rounded-sm text-primary font-mono"
      )}
      {...props}
    />
  );
};
