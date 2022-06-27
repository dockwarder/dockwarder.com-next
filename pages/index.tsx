import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Home;
