import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { Helmet, HelmetProvider } from 'react-helmet-async';


class MyDocument extends Document {
  render() {
    return (
      <HelmetProvider>
           <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      </HelmetProvider>
   
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
  originalRenderPage({
    // eslint-disable-next-line react/display-name
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
