import { GetStaticPaths, GetStaticProps } from "next";
import { NestedSidebarLayout } from "../../layouts/NestedSidebarLayout";
import { NextPageWithLayout } from "../_app";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  getPostBySlug,
  getSlugs,
  getAllPosts,
  serializeContent,
} from "../../lib/mdx";
import { PostList } from "../../components/PostList";
import { Post } from "../../typings/Post";

interface Props {
  post: Post;
  posts: Post[];
  mdxSource: MDXRemoteSerializeResult;
}

export const SinglePost: NextPageWithLayout<Props> = ({ post, mdxSource }) => {
  const { title, date } = post.data;

  return (
    <main className="pt-20 col-span-9 col-start-8 px-[calc(100vw/16)] h-screen overflow-scroll">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg opacity-60 mt-2">
        Posted on {date} &middot; {post.readingTime}
      </p>
      <article className="mt-10 prose prose-neutral">
        <MDXRemote {...mdxSource} />
      </article>
    </main>
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

SinglePost.getLayout = (page) => {
  const posts = page.props.posts;

  return (
    <NestedSidebarLayout>
      <PostList posts={posts} />
      {page}
    </NestedSidebarLayout>
  );
};

export default SinglePost;
