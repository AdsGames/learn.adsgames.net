import Link from "next/link";

import { Layout } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";

const Custom404 = () => (
  <Layout description="Page not found" home title="Home">
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>404 Page not found</h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <br />
      <br />
    </section>
  </Layout>
);

export default Custom404;
