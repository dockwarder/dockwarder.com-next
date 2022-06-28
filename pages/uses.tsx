import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";

const Uses: NextPageWithLayout = () => {
  return null;
};

Uses.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Uses;
