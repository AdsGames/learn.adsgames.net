import fs from "fs";
import { join } from "path";

import type { CategoryMeta } from "@/types/post";

const postsDirectory = join(process.cwd(), "posts");

/**
 * Get metadata from category
 * @param categoryId Category to get posts from
 * @returns Parsed metadata
 */
export const getCategoryMeta = (categoryId: string): CategoryMeta =>
  JSON.parse(
    fs.readFileSync(join(postsDirectory, categoryId, "meta.json"), "utf8"),
  ) as CategoryMeta;

/**
 * Get categories
 * @returns All category ids
 */
export const getCategories = () => fs.readdirSync(postsDirectory);

/**
 * Get post file path
 * @param categoryId Id of category post belongs to
 * @param id Id of post
 * @returns Path to post file
 */
export const getPostFile = (categoryId: string, id: string) =>
  join(postsDirectory, `${categoryId}/${id}.md`);
