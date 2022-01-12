import React from 'react';
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { ServerStyleSheets } from '@material-ui/core';

class JadeTemplate extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialUiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => materialUiSheets.collect(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        <>
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>,
      ],
    };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export { JadeTemplate };
