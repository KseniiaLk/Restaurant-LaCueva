import { cn } from "./ui/utils";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/lacueva_png.png"
      alt="La Cueva"
      className={cn("block h-auto border-0", className)}
    />
  );
}
