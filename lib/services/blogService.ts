import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../../typings/Post";

const postsDirectory = path.join(process.cwd(), "content", "posts");

const getFilePath = (filename) => path.join(postsDirectory, filename);

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(getFilePath(filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
};

export const getPostBySlug = (slug: string): Post => {
  const markdownWithMeta = fs.readFileSync(getFilePath(`${slug}.mdx`), "utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);

  return { frontMatter, content };
};
