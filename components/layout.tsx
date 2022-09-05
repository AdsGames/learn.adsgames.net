import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import utilStyles from "@/styles/utils.module.css";

import { Footer } from "./footer";
import styles from "./layout.module.css";
import { Nav } from "./nav";

const name = "Learn on A.D.S. Games";
const siteTitle = "learn.adsgames.net";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  nextPage?: string | null;
  prevPage?: string | null;
  title: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  nextPage,
  prevPage,
  title,
  description,
}) => {
  const { asPath } = useRouter();

  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta content={description} name="description" />
          <meta content={siteTitle} name="og:title" />
          <title>{`${title} - ${siteTitle}`}</title>
          <link
            href={`${process.env.SITE_URL ?? ""}${asPath}`}
            rel="canonical"
          />
        </Head>
        <Nav />
        <header className={styles.header}>
          {home ? (
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          ) : (
            <h2 className={utilStyles.headingMd}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          )}
        </header>
        <main>{children}</main>
        {!home && (Boolean(nextPage) || Boolean(prevPage)) && (
          <div className={styles.navigator}>
            {prevPage ? (
              <Link href={prevPage}>
                <a>← Prev</a>
              </Link>
            ) : (
              <div />
            )}

            {nextPage ? (
              <Link href={nextPage}>
                <a>Next →</a>
              </Link>
            ) : null}
          </div>
        )}

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
