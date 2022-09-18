import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../components/atoms/_frameranimations';
import Layout from '../components/layout/layout';
import PageTitle from '../components/pageTitle/pageTitle';
import ContactForm from '../components/forms/contact';
import Footer from '../components/footer/footer';

export default function Services(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Get In Touch | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>

    <PageTitle title='Contact Us'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
    </PageTitle>

    <motion.div
      variants={variants}
      initial='hiddenBottom'
      whileInView='show'
      transition={{delay: 0.3}}
    >
      <ContactForm />
    </motion.div>

    <Footer />

  </Layout>
  </>
}