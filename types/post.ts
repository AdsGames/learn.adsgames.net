export interface CategoryMeta {
  title: string;
  description: string;
  author: string;
  date: string;
  postIds: string[];
}

export interface Category {
  categoryId: string;
  meta: CategoryMeta;
  posts: PostSummary[];
}

export interface PostFM {
  title: string;
  description: string;
}

export interface PostSummary extends PostFM {
  id: string;
}

export interface Post extends PostSummary {
  contentHtml: string;
  category: CategoryMeta;
}
