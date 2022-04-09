import type { Category, Post, PostFM } from "@/types/post";

import { parseFrontMatter, parsePost } from "./md-parser";
import { getCategories, getCategoryMeta, getPostFile } from "./posts-db";

/**
 * Get category data
 * @param categoryId Category to get posts from
 * @returns All post data for a category and category meta
 */
export const getCategoryData = (categoryId: string): Category => ({
  categoryId,
  meta: getCategoryMeta(categoryId),
  posts: getCategoryMeta(categoryId).postIds.map((id) => ({
    id,
    ...parseFrontMatter<PostFM>(getPostFile(categoryId, id)).data,
  })),
});

/**
 * Get categories and data
 * @returns All categories and their post summaries
 */
export const getAllCategoryData = (): Category[] =>
  getCategories()
    .map((categoryId) => getCategoryData(categoryId))
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

/**
 * Get post data
 * @param categoryId Id of category post belongs to
 * @param id Id of post
 * @returns Post data, including contentHtml
 */
export const getPostData = async (
  categoryId: string,
  id: string,
): Promise<Post> => ({
  id,
  category: getCategoryMeta(categoryId),
  ...(await parsePost(getPostFile(categoryId, id))),
});

/**
 * Get all paths for categories
 * @returns Paths to all posts
 */
export const getAllCategoryPaths = () =>
  getCategories().map((categoryId) => ({
    params: { category_id: categoryId },
  }));

/**
 * Get all paths for static rendering
 * @returns Paths to all posts
 */
export const getAllPostPaths = () =>
  getCategories().flatMap((categoryId) =>
    getCategoryMeta(categoryId).postIds.map((id) => ({
      params: { id, category_id: categoryId },
    })),
  );
