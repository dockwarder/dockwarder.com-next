import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "../_app";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  getPostBySlug,
  getSlugs,
  getAllPosts,
  serializeContent,
} from "../../lib/mdx";
import { Post } from "../../typings/Post";
import { SidebarLayout } from "../../layouts/SidebarLayout";
import { Sidebar } from "../../components/Sidebar";
import { PostList } from "../../components/PostList";

interface Props {
  post: Post;
  posts: Post[];
  mdxSource: MDXRemoteSerializeResult;
}

export const BlogPost: NextPageWithLayout<Props> = ({
  posts,
  post,
  mdxSource,
}) => {
  const { title, date } = post.data;

  return (
    <>
      <Sidebar size="large">
        <PostList posts={posts} />
      </Sidebar>
      <main className="pt-20 col-span-9 px-[calc(100vw/16)] h-screen overflow-scroll">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg opacity-60 mt-2">
          Posted on {date} &middot; {post.readingTime}
        </p>
        <article className="mt-10 prose prose-neutral dark:prose-invert">
          <MDXRemote {...mdxSource} />
        </article>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const posts = getAllPosts();
  const { content, ...post } = getPostBySlug(slug as string);
  const mdxSource = await serializeContent(content);

  return {
    props: {
      post,
      posts,
      mdxSource,
    },
  };
};

BlogPost.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default BlogPost;
