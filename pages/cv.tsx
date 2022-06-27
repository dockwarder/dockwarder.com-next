import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";

const CV: NextPageWithLayout = () => {
  return null;
};

CV.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default CV;
