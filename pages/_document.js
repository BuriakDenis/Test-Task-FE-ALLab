import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div className="wrapper">
          <div className="page">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
