import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { Date } from "@/components/date";
import { Layout, siteTitle } from "@/components/layout";
import { getAllCategoryData } from "@/lib/posts";
import utilStyles from "@/styles/utils.module.css";
import type { Category } from "@/types/post";

interface HomeProps {
  categories: Category[];
}

const Home: React.FC<HomeProps> = ({ categories }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>
        Welcome to the ADS Games tutorial page.
      </h2>
      <p>Here you will find great programming lessons, all free!</p>
      <p>Click on a language to get started!</p>
      <p>
        Also, check out the{" "}
        <a href="https://assets.adsgames.net">ADS Games gamedev asset page.</a>{" "}
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Recents</h2>
      <ul className={utilStyles.list}>
        {categories.map(({ categoryId, meta }) => (
          <li className={utilStyles.listItem} key={categoryId}>
            <Link href={`/${categoryId}`}>
              <a>{meta.title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={meta.date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const categories = getAllCategoryData();

  return {
    props: {
      categories,
    },
  };
};

export default Home;
