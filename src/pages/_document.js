import Document, { Html, Head, Main, NextScript } from 'next/document'


/*
 * File created to custom html default document.  
 */

export default class CustomDocument extends Document {

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}