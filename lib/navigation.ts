import { NavigationList } from "../typings/Navigation";
import uniqueId from "lodash/uniqueId";

// Icons
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  RiCommandFill,
  RiGitMergeFill,
  RiHomeSmileFill,
  RiRssFill,
  RiUser5Fill,
} from "react-icons/ri";

export const navigationLists: NavigationList[] = [
  {
    id: uniqueId("nav-list-"),
    items: [
      {
        id: uniqueId("nav-"),
        label: "Entrance",
        // subtitle: "Where it all begins",
        href: "/",
        icon: RiHomeSmileFill,
      },
      {
        id: uniqueId("nav-"),
        label: "Curriculum Vitae",
        subtitle: "What I did so far",
        href: "/cv",
        icon: RiGitMergeFill,
      },
    ],
  },
  {
    id: uniqueId("nav-list-"),
    label: "Work",
    items: [
      {
        id: uniqueId("nav-"),
        label: "Clients",
        subtitle: "Collaboration Projects",
        href: "/clients",
        icon: RiUser5Fill,
      },
    ],
  },
  {
    id: uniqueId("nav-list-"),
    label: "Content",
    items: [
      {
        id: uniqueId("nav-"),
        label: "Blog",
        subtitle: "Thoughts & Guides",
        href: "/blog",
        icon: RiRssFill,
      },
      {
        id: uniqueId("nav-"),
        label: "Uses",
        subtitle: "Sick Picks",
        href: "/uses",
        icon: RiCommandFill,
      },
    ],
  },
  {
    id: uniqueId("nav-list-"),
    label: "Social",
    items: [
      {
        id: uniqueId("nav-"),
        label: "Twitter",
        href: "https://twitter.com/dockwarder",
        icon: FaTwitter,
        target: "_blank",
      },
      {
        id: uniqueId("nav-"),
        label: "Source Code",
        href: "https://github.com/dockwarder/dockwarder.com",
        icon: FaGithub,
        target: "_blank",
      },
    ],
  },
];
