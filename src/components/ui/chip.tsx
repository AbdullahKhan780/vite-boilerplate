import clsx from "clsx";

interface ChipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function Chip({ children, className, ...props }: ChipProps) {
  return (
    <div
      className={clsx(
        "border-1.5 rounded-3xl flex items-center justify-center line-clamp-1 truncate text-sm md:text-base py-1 px-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
