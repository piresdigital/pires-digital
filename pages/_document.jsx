import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>

      <meta charSet="utf-8" />
      <meta property="og:locale" content="en_NZ" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pires Digital | Creative Digital Agency | Ad Creative Services" />
      <meta property="og:description" content="As a creative advertising agency in Christchurch New Zealand, we offer a full range of ad creative services that help your business with all of its advertising and designing needs. Get a free quote today!" />
      <meta property="og:url" content="https://piresdigital.com/" />
      <meta property="og:image" content="/img/open-graph.gif" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />
      <meta name="geo.placename" content="Christchurch" />
      <meta name="geo.region" content="NZ" />
      <link rel="icon" type="image/png" href="img/favicon.png"></link>

      <script type='text/javascript' src='/main.js'></script>
      
      </Head>
      <body>
        
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}