import { FC, ReactNode, Children } from "react";

// UI
import { Sidebar } from "../components/Sidebar";
import { SidebarLayout } from "./SidebarLayout";

interface Props {
  children: ReactNode;
}

export const NestedSidebarLayout: FC<Props> = ({ children }) => {
  const childrenArray = Children.toArray(children);
  const sidebarContent = childrenArray[0];
  const pageContent = childrenArray[1];

  return (
    <SidebarLayout>
      <Sidebar size="large">{sidebarContent}</Sidebar>
      {pageContent}
    </SidebarLayout>
  );
};
