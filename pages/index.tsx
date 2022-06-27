import { GetStaticProps } from "next";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "../lib/mdxComponents";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ mdxSource }) => {
  return (
    <main className="pt-16 col-span-9 col-start-6">
      <MDXRemote {...mdxSource} components={components} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = fs.readFileSync(
    path.join(process.cwd(), "content/home.mdx"),
    "utf-8"
  );
  const { content } = matter(homeContent);
  const mdxSource = await serialize(content);

  return {
    props: { mdxSource },
  };
};

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Home;
