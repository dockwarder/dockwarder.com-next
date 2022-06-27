import { FC, ReactNode } from "react";

// Utils
import cn from "classnames";

interface Props {
  children: ReactNode;
  size?: "default" | "large";
}

export const Sidebar: FC<Props> = ({ children, size = "default" }) => {
  const additionalClasses = cn({
    "col-span-3": size === "default",
    "col-span-4": size === "large",
  });

  return (
    <aside
      className={`${additionalClasses} relative h-screen pt-3 px-3 border-r border-neutral-300`}
    >
      {children}
    </aside>
  );
};
