import React, { FC } from "react";

interface Props {
  children: string;
}

export const SidebarTitle: FC<Props> = ({ children }) => {
  return <span className="font-semibold tracking-tight">{children}</span>;
};
