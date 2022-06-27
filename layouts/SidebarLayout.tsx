import React, { FC, ReactNode } from "react";

// UI
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { SidebarTitle } from "../components/SidebarTitle";

// Data
import { navigationLists } from "../data/navigation";
import { SidebarLink } from "../components/SidebarLink";

interface Props {
  children: ReactNode;
}

export const SidebarLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(16,minmax(0,1fr))]">
      <Sidebar>
        <Link href="/">
          <a>
            <SidebarTitle>Julius Dockwarder</SidebarTitle>
          </a>
        </Link>

        <nav className="mt-10">
          {navigationLists.map((navigationList) => (
            <React.Fragment key={navigationList.id}>
              {navigationList.label && (
                <span className="mt-10 mb-2 block text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  {navigationList.label}
                </span>
              )}
              <div className="space-y-1">
                {navigationList.items.map((navigationLink) => (
                  <SidebarLink
                    key={navigationLink.id}
                    navigationLink={navigationLink}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </nav>
      </Sidebar>
      {children}
    </div>
  );
};
