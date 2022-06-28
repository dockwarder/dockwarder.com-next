import { GetStaticProps } from "next";
import { PostList } from "../../components/PostList";
import { NestedSidebarLayout } from "../../layouts/NestedSidebarLayout";
import { getAllPosts } from "../../lib/mdx";
import { NextPageWithLayout } from "../_app";

export const Blog: NextPageWithLayout = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

Blog.getLayout = (page) => {
  const posts = page.props.posts;

  return (
    <NestedSidebarLayout>
      <PostList posts={posts} />
      {page}
    </NestedSidebarLayout>
  );
};

export default Blog;
