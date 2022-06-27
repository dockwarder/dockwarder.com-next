import { NavigationList } from "./navigation.d";
import uniqueId from "lodash/uniqueId";

// Icons
import {
  HomeIcon,
  // AcademicCapIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

export const navigationLists: NavigationList[] = [
  {
    id: uniqueId("nav-list-"),
    items: [
      {
        id: uniqueId("nav-"),
        label: "Entrance",
        subtitle: "Where it all begins",
        href: "/",
        icon: HomeIcon,
      },
      // {
      //   id: uniqueId("nav-"),
      //   label: "Curriculum Vitae",
      //   subtitle: "What I did so far",
      //   href: "/cv",
      //   icon: AcademicCapIcon,
      // },
    ],
  },
  {
    id: uniqueId("nav-list-"),
    label: "Content",
    items: [
      {
        id: uniqueId("nav-"),
        label: "Blog",
        subtitle: "Breaking news",
        href: "/blog",
        icon: AnnotationIcon,
      },
    ],
  },
];
