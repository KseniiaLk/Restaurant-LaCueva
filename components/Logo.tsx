import { cn } from "./ui/utils";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/LaCueva1.png"
      alt="La Cueva"
      className={cn(
        "block h-auto border-0 sepia saturate-[2] hue-rotate-[18deg] brightness-45 contrast-110",
        className,
      )}
    />
  );
}
