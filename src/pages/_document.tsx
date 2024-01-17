import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/maf6gaa.css"
        ></link>
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="Leo Morton" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
