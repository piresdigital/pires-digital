import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import PageTitle from '../components/pageTitle/pageTitle';
import Container from '../components/container/container';
import Footer from '../components/footer/footer';

export default function Services(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Our Work | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='Our Work'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
    </PageTitle>

    <Container>
      Content
    </Container>

    <Footer />

  </Layout>
  </>
}