import { GetStaticProps } from "next";
import { PostList } from "../../components/PostList";
import { Sidebar } from "../../components/Sidebar";
import { SidebarLayout } from "../../layouts/SidebarLayout";
import { getAllPosts } from "../../lib/mdx";
import { Post } from "../../typings/Post";
import { NextPageWithLayout } from "../_app";

interface Props {
  posts: Post[];
}

export const Blog: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <>
      <Sidebar size="large">
        <PostList posts={posts} />
      </Sidebar>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

Blog.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Blog;
