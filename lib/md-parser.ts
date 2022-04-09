import fs from "fs";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { PostFM } from "@/types/post";

export const parseFrontMatter = <TData>(path: string) => {
  const fileContents = fs.readFileSync(path, "utf8");
  const parsed = matter(fileContents);
  return {
    content: parsed.content,
    data: parsed.data as TData,
  };
};

export const parseMarkdown = async (contents: string) => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(contents);

  return processedContent.toString();
};

export const parsePost = async (path: string) => {
  const { content, data } = parseFrontMatter<PostFM>(path);
  const contentHtml = await parseMarkdown(content);

  return {
    ...data,
    contentHtml,
  };
};
