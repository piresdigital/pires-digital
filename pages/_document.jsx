import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>

      <meta charSet="utf-8" />
      <meta property="og:locale" content="en_NZ" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pires Digital | Web Design Agency based in Christchurch NZ" />
      <meta property="og:description" content="As a creative web agency in Christchurch New Zealand, we offer a range of creative web services that help your business with all of its web designing needs. Get a free quote today!" />
      <meta property="og:url" content="https://piresdigital.com/" />
      <meta property="og:image" content="/img/open-graph.gif" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />
      <meta name="geo.placename" content="Christchurch" />
      <meta name="geo.region" content="NZ" />

      <link rel="icon" type="image/png" href="img/favicon.png"></link>

      <base href='http://127.0.0.1:3000/' target='_self' />
      
      </Head>
      <body>
        
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}