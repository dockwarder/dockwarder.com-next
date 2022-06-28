import { GetStaticProps } from "next";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { NextPageWithLayout } from "./_app";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serializeContent } from "../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ mdxSource }) => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    let phi = 4.1;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio,
      width:
        canvasRef.current.getBoundingClientRect().width *
        window.devicePixelRatio,
      height:
        canvasRef.current.getBoundingClientRect().width *
        window.devicePixelRatio,
      phi: 4.1,
      theta: 0.5,
      dark: 1,
      diffuse: 0,
      mapSamples: 16384,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [52.520008, 13.404954], size: 0.05 }],
      onRender(state) {
        state.phi = phi;
        phi -= 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden flex items-center justify-center lg:col-[span_13]">
      <canvas
        ref={canvasRef}
        className="w-[100%] blur-sm opacity-60 aspect-square pointer-events-none"
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
