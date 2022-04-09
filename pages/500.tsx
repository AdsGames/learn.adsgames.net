import Link from "next/link";

import { Layout } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";

const Custom500 = () => (
  <Layout home title="Home">
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>500 An Error Occurred</h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <br />
      <br />
    </section>
  </Layout>
);

export default Custom500;
