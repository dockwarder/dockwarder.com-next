export type NavigationLink = {
  id: string;
  label: string;
  subtitle?: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  target?: string;
  disabled?: boolean;
};

export type NavigationList = {
  id: string;
  label?: string;
  items: NavigationLink[];
};
