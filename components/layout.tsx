import Head from "next/head";
import Link from "next/link";

import utilStyles from "@/styles/utils.module.css";

import { Footer } from "./footer";
import styles from "./layout.module.css";
import { Nav } from "./nav";

const name = "Learn on A.D.S. Games";
export const siteTitle = "learn.adsgames.net";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  nextPage?: string | null;
  prevPage?: string | null;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  nextPage,
  prevPage,
}) => (
  <>
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="Learn how to build a personal website using Next.js"
          name="description"
        />
        <meta
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          property="og:image"
        />
        <meta content={siteTitle} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />
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
      {!home && (nextPage || prevPage) && (
        <div className={styles.navigator}>
          {prevPage ? (
            <Link href={prevPage}>
              <a>← Prev</a>
            </Link>
          ) : (
            <div />
          )}

          {nextPage && (
            <Link href={nextPage}>
              <a>Next →</a>
            </Link>
          )}
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
