import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavigationLink } from "../typings/Navigation";
import cn from "classnames";

interface Props {
  navigationLink: NavigationLink;
}

export const SidebarLink: FC<Props> = ({ navigationLink }) => {
  const { route } = useRouter();
  const Icon = navigationLink.icon;
  const isActive =
    navigationLink.href === "/"
      ? route === navigationLink.href
      : route.includes(navigationLink.href);

  const additionalClasses = cn({
    "bg-neutral-900 dark:bg-white text-white dark:text-black":
      isActive && !navigationLink.disabled,
    "hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:text-white": !isActive,
    "pointer-events-none": navigationLink.disabled,
  });

  return (
    <Link href={navigationLink.href}>
      <a
        className={`${additionalClasses} transition duration-75 p-2 rounded-lg flex font-medium text-sm`}
        target={navigationLink.target ?? "_self"}
      >
        <Icon className="w-5 h-5 mr-4" />
        <div>
          {navigationLink.label}
          {navigationLink.subtitle && (
            <p className="text-xs mt-0.5 font-normal opacity-60">
              {navigationLink.subtitle}
            </p>
          )}
        </div>
      </a>
    </Link>
  );
};
