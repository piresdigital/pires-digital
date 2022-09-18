import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../../components/atoms/_frameranimations';
import Layout from '../../components/layout/layout';
import PageTitle from '../../components/pageTitle/pageTitle';
import Container from '../../components/container/container';
import Feedback from '../../components/feedback/feedback';
import Footer from '../../components/footer/footer';

export default function WebsiteApp(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Web &amp; Mobile App Development | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='Web &amp; Mobile App Development'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/services'>
          <a>Services</a>
        </Link>
      </li>
    </PageTitle>

    <Container>
      <motion.div 
      variants={variants}
      initial='hiddenBottom'
      whileInView='show'
      transition={{delay: 0.35}}
      >
      <div className='title'>
        <h1>
          
        </h1>
        <p></p>
        <style jsx>{`
          .title {
            margin-bottom: 60px;
          }
          .title h1 {
            margin-bottom: 30px;
            font-size: 2.3em;
            line-height: 1.2;
          }
          .title h1 span {
            font-size: 1.2em;
            color: var(--primary-color);
          }

          @media screen and (min-width: 1000px) {
            .title {
              font-size: 1.25em;
              margin: 140px 0 160px;
            }
            .title p {
              max-width: 800px;
            }
          }
        `}</style>
      </div>
      </motion.div>
    </Container>

    

    <section className='cta'>
      <Container>
        <div>
          <h2>Got a project that you would like to discuss?</h2>
          <Link href='/contact'>
            <a>Get In Touch</a>
          </Link>
        </div>
      </Container>
      <style jsx>
        {`
        .cta {
          color: #fff;
          background-color: var(--primary-color);
          padding: 90px 0;
          margin-bottom: 140px;
          text-align: center;
        }
        .cta h2 {
          font-size: 2.3em;
          margin-bottom: 60px;
        }
        .cta a {
          text-decoration: none;
          font-size: 1.3em;
          padding: 16px 20px;
          color: #fff;
          border: 2px solid #fff;
          transition: all 200ms ease-out;
        }
        .cta a:hover {
          border: 4px solid #fff;
        }
        `}
      </style>
    </section>

    <Feedback />

    <Footer />

  </Layout>
  </>
}