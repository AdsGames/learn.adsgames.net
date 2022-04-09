import "highlight.js/styles/monokai-sublime.css";
import "katex/dist/katex.min.css";
import type { AppProps } from "next/app";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
