import { FC } from "react";
import { Post } from "../typings/Post";

// UI
import Link from "next/link";

// Hooks
import { useRouter } from "next/router";

// Utils
import cn from "classnames";

interface Props {
  post: Post;
}

export const SidebarPost: FC<Props> = ({ post }) => {
  const { query } = useRouter();
  const isActive = query.slug === post.slug;
  const additionalClasses = cn({
    "bg-neutral-900 text-white": isActive,
    "hover:bg-neutral-100": !isActive,
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className={`${additionalClasses} p-2 px-3 rounded-lg`}>
          <span className="block text-sm font-medium">{post.data.title}</span>
          <span className="block text-xs mt-0.5">
            {post.data.date} - {post.readingTime}
          </span>
        </div>
      </a>
    </Link>
  );
};
