import { cn } from "@workspace/ui/lib/utils";

export const WidgetHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-[#dc4242] to-[#ab0707] p-4 text-white",
        className,
      )}
    >
      {children}
    </header>
  );
};
