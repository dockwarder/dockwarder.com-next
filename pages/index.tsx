import { GetStaticProps } from "next";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serializeContent } from "../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ mdxSource }) => {
  return (
    <main className="pt-16 prose prose-neutral h-screen overflow-scroll lg:col-span-9 lg:col-start-6">
      <MDXRemote {...mdxSource} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = fs.readFileSync(
    path.join(process.cwd(), "content/home.mdx")
  );
  const { content } = matter(homeContent);
  const mdxSource = await serializeContent(content);

  return {
    props: {
      mdxSource,
    },
  };
};

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Home;
