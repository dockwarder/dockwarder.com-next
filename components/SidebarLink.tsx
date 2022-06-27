import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavigationLink } from "../data/navigation.d";
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
    "bg-neutral-900 text-white": isActive,
    "hover:bg-neutral-200": !isActive,
  });

  return (
    <Link href={navigationLink.href}>
      <a
        className={`${additionalClasses} p-2 rounded-md flex font-medium text-sm`}
      >
        <Icon className="w-5 h-5 mr-4" />
        <div>
          {navigationLink.label}
          <p className="text-xs mt-0.5 font-normal opacity-60">
            {navigationLink.subtitle}
          </p>
        </div>
      </a>
    </Link>
  );
};
