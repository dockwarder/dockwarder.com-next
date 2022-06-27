import { FC } from "react";
import { Post } from "../typings/Post";

// UI
import Link from "next/link";
import { SidebarPost } from "./SidebarPost";
import { SidebarTitle } from "./SidebarTitle";

interface Props {
  posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <>
      <Link href="/">
        <a className="px-3">
          <SidebarTitle>Posts</SidebarTitle>
        </a>
      </Link>
      <div className="mt-5">
        {posts.map((post) => (
          <SidebarPost key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};
