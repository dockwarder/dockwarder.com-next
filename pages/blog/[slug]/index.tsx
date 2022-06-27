import { GetStaticPaths, GetStaticProps } from "next";
import { NestedSidebarLayout } from "../../../layouts/NestedSidebarLayout";
import { NextPageWithLayout } from "../../_app";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getAllPosts, getPostBySlug } from "../../../services/blogService";
import { PostList } from "../../../components/PostList";
import { Post } from "../../../typings/Post";

interface Props {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
}

export const SinglePost: NextPageWithLayout<Props> = ({ post, mdxSource }) => {
  const { title } = post.frontMatter;

  return (
    <main className="col-span-9">
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const posts = getAllPosts();
  const { frontMatter, content } = getPostBySlug(slug as string);
  const mdxSource = await serialize(content);

  return {
    props: {
      post: {
        frontMatter,
        content,
      },
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
