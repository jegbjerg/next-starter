import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
