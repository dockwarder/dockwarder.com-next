import { GetStaticProps } from "next";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serializeContent } from "../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useGlobe } from "../hooks/useGlobe";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ mdxSource }) => {
  const globeCanvasRef = useGlobe();

  return (
    <main className="h-screen overflow-hidden flex items-center justify-center lg:col-[span_13]">
      <canvas
        ref={globeCanvasRef}
        className="w-2/3 aspect-square pointer-events-none"
      />
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
  return <SidebarLayout float>{page}</SidebarLayout>;
};

export default Home;
