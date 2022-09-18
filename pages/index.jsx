import Head from 'next/head';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';

export default function Home() {
  return <>
  <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Pires Digital | Web Design Agency based in Christchurch NZ</title>
    <meta name="description" content="As a web design agency in Christchurch New Zealand, we offer a full range of creative web services that help your business with all of its digital designing needs. Get a free quote today!" />
  </Head>
  
  <Layout>
    <Hero />
  </Layout>
  
  </>
}