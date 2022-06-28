import { FC, ReactNode } from "react";

// Utils
import cn from "classnames";

interface Props {
  children: ReactNode;
  size?: "default" | "large";
  className?: string;
}

export const Sidebar: FC<Props> = ({
  children,
  size = "default",
  className,
}) => {
  const additionalClasses = cn(className, {
    "col-span-3": size === "default",
    "col-span-4": size === "large",
  });

  return (
    <aside
      className={`${additionalClasses} bg-white dark:bg-black relative h-screen pt-3 px-2 border-r border-neutral-300 dark:border-neutral-700`}
    >
      {children}
    </aside>
  );
};
