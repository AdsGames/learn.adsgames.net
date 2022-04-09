import type { GetStaticProps } from "next";

import { Date } from "@/components/date";
import { Layout } from "@/components/layout";
import { getAllPostPaths, getPostData } from "@/lib/posts";
import utilStyles from "@/styles/utils.module.css";
import type { Post } from "@/types/post";

interface PostPageProps {
  postData: Post;
  categoryId: string;
}

const getNav = (id: string, categoryId: string, postIds: string[]) => {
  const currentIndex = postIds.findIndex((c) => c === id);

  let nextPage: string | null = null;
  let prevPage: string | null = null;

  if (currentIndex !== postIds.length - 1) {
    nextPage = `/${categoryId}/${postIds[currentIndex + 1]}`;
  }

  if (currentIndex !== 0) {
    prevPage = `/${categoryId}/${postIds[currentIndex - 1]}`;
  }

  return { nextPage, prevPage };
};

const PostPage: React.FC<PostPageProps> = ({ postData, categoryId }) => (
  <Layout
    {...getNav(postData.id, categoryId, postData.category.postIds)}
    title={postData.title}
  >
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.category.date} />
      </div>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticPaths = () => ({
  paths: getAllPostPaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => ({
  props: {
    postData: await getPostData(
      params?.category_id as string,
      params?.id as string,
    ),
    categoryId: params?.category_id as string,
  },
});

export default PostPage;
