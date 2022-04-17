import type { GetStaticProps } from "next";
import Link from "next/link";

import { Date } from "@/components/date";
import { Layout } from "@/components/layout";
import { getAllCategoryPaths, getCategoryData } from "@/lib/posts";
import utilStyles from "@/styles/utils.module.css";
import type { CategoryMeta, PostSummary } from "@/types/post";

interface CategoryPageProps {
  posts: PostSummary[];
  meta: CategoryMeta;
  categoryId: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  posts,
  categoryId,
  meta,
}) => (
  <Layout description={meta.description} title={meta.title}>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h1 className={utilStyles.headingXl}>{meta.title}</h1>
      <h2 className={utilStyles.headingLg}>Sections</h2>
      <ul className={utilStyles.list}>
        {posts.map(({ id, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/${categoryId}/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={meta.date} />
              {` - ${meta.author}`}
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export const getStaticPaths = () => ({
  paths: getAllCategoryPaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps<CategoryPageProps> = ({
  params,
}) => ({
  props: {
    ...getCategoryData(params?.category_id as string),
  },
});

export default CategoryPage;
