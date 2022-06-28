import { SidebarLayout } from "../../layouts/SidebarLayout";
import { NextPageWithLayout } from "../_app";

const Clients: NextPageWithLayout = () => {
  return null;
};

Clients.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Clients;
