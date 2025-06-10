import { cn } from "../../libs/utils";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "default" | "secondary" | "ghost" | "outlined";
  size?: "default" | "sm" | "icon";
  children?: string | React.ReactNode;
}

export function Button({
  variant = "default",
  size = "default",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full text-white text-lg cursor-pointer",
        size === "default"
          ? "px-5 py-2 h-12"
          : size === "sm"
          ? "px-3 py-1 h-6"
          : "h-12 w-12 p-2 flex items-center justify-center",
        variant === "default"
          ? "bg-primary"
          : variant === "secondary"
          ? "bg-secondary"
          : variant === "outlined"
          ? "border border-black"
          : "bg-transparent",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
