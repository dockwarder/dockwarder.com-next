import path from "path";
import fs from "fs";
import matter from "gray-matter";
import rt from "reading-time";
import { sync } from "glob";
import { Post } from "../typings/Post";
import { serialize } from "next-mdx-remote/serialize";

const postsPath = path.join(process.cwd(), "content/posts");

export const createPost = (
  data: { [key: string]: any },
  content: string,
  slug: string
): Post => {
  const readingTime = rt(content).text;

  return {
    data,
    readingTime,
    slug,
  };
};

export const getSlugs = () => {
  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
};

export const getAllPosts = () => {
  const posts = fs.readdirSync(postsPath);

  return posts.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(postsPath, postSlug));
    const postMatter = matter(source);
    const { content, ...post } = createPost(
      postMatter.data,
      postMatter.content,
      postSlug.split(".")[0]
    );

    return [post, ...allPosts];
  }, []);
};

export const getPostBySlug = (slug: string): Post => {
  const postsDir = path.join(postsPath, `${slug}.mdx`);
  const source = fs.readFileSync(postsDir);
  const { content, data } = matter(source);
  const readingTime = rt(content).text;

  return {
    data,
    readingTime,
    content,
    slug,
  };
};

export const serializeContent = async (content: string) => {
  return await serialize(content, {
    mdxOptions: {
      rehypePlugins: [],
    },
  });
};
