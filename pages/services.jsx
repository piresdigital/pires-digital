import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../components/atoms/_frameranimations';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageTitle from '../components/pageTitle/pageTitle';
import ContactForm from '../components/forms/contact';
import Footer from '../components/footer/footer';

import CardsOne from '../components/cards/cards-one';

export default function Services(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Services | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='Services'>
      <li>
        <Link href='/'>
          <a>Home</a>
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
          <span>What we offer</span> Creative &amp;<br /> Meaningful Designs
        </h1>
        <p>We craft dynamic, innovative and lasting designs that form meaningful connections between brands and consumers.</p>
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
            display: block;
            font-weight: 300;
            font-size: 0.5em;
            margin-bottom: 12px;
          }

          @media screen and (min-width: 1000px) {
            .title {
              font-size: 1.25em;
              margin: 140px 0 120px;
            }
          }
        `}</style>
      </div>
      </motion.div>
    </Container>

    
    <Container>
      <div className='cards'>

        <motion.div
          variants={variants}
          initial='hiddenBottom'
          whileInView='show'
          transition={{delay: 0.35}}
        >
        <CardsOne 
          image='/img/illustrations/designer.svg'
          imageAlt='Web Designer'
        >
          <h2>Website Design</h2>
          <p>We build modern, responsive websites backed by UX research. Combining design aesthetics with functionality, we develop engaging interfaces that put you above your competitors.</p>
        </CardsOne>
        </motion.div>

        <motion.div
          variants={variants}
          initial='hiddenBottom'
          whileInView='show'
          transition={{delay: 0.35}}
        >
        <CardsOne 
          image='/img/illustrations/programmer.svg'
          imageAlt='Web Designer'
        >
          <h2>Custom Development</h2>
          <p>Whether it be a simple document sharing app or a comprehensive automation system, we work to deliver UX-optimised mobile and web-based applications.</p>
        </CardsOne>
        </motion.div>

      </div>
      
      <style jsx>
        {`
        .cards {
          display: flex;
          flex-direction: column;
          padding: 60px 0;
        }
        @media screen and (min-width: 800px) {
          .cards {
            flex-direction: row;
            column-gap: 60px;
          }
        }
        `}
      </style>
    </Container>

    <section className='services'>
      <Container>
        <motion.div 
          variants={variants}
          initial='hiddenBottom'
          whileInView='show'
          transition={{delay: 0.35}}
          >
          <div className='services_grid'>

            <div className='service'>
              <img src="/img/icons/wireframe.svg" alt="" />
              <h3>Website Design</h3>
              <p>Brief description of this service.</p>

              <Link href="/services/website-design">
                <a>Learn more.</a>
              </Link>

            </div>

            {/* <div className='service'>
              <img src="/img/icons/custom-code.svg" alt="" />
              <h3>Web &amp; Mobile App</h3>
              <p>Brief description of this service.</p>
              <Link href="/services/web-mobile-app">
                <a>Learn more.</a>
              </Link>
            </div> */}

            <div className='service'>
              <img src="/img/icons/shopping.svg" alt="" />
              <h3>E-commerce Website</h3>
              <p>Brief description of this service.</p>
              <Link href="/services/ecommerce-website">
                <a>Learn more.</a>
              </Link>
            </div>

            {/* <div className='service'>
              <img src="/img/icons/settings.svg" alt="" />
              <h3>Search Engine (SEO)</h3>
              <p>Brief description of this service.</p>
              <Link href="/services/seo">
                <a>Learn more.</a>
              </Link>
            </div> */}
            
          </div>
        </motion.div>
      </Container>
      <style jsx>
        {`
        .services {
          padding: 90px 0;
        }
        .services_grid {
          display: flex;
          flex-direction: column;
          row-gap: 70px;
        }
        .service {
          text-align: center;
        }
        .service img {
          max-width: 100px;
          display: inline-block;
        }
        .service h3 {
          font-size: 1.75em;
        }
        .service a {
          display: inline-block;
          padding: 8px 15px;
          font-weight: 600;
          color: var(--primary-color);
        }

        @media screen and (min-width: 800px) {
          .services_grid {
            flex-wrap: wrap;
            flex-direction: row;
            row-gap: 90px;
          }
          .service {
            width: 50%;
          }
        }
        `}
      </style>
    </section>

    <motion.div
      variants={variants}
      initial='hiddenBottom'
      whileInView='show'
    >
      <ContactForm />
    </motion.div>

    <Footer />

  </Layout>
  </>
}