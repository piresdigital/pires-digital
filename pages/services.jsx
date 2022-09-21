import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import variants from '../components/atoms/_frameranimations';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageTitle from '../components/pageTitle/pageTitle';
import ContactForm from '../components/forms/contact';
import Footer from '../components/footer/footer';

import CardsOne from '../components/cards/cards-one';

import iconCustomCode from '../public/img/icons/custom-code.svg';
import iconShopping from '../public/img/icons/shopping.svg';
import iconSettings from '../public/img/icons/settings.svg';
import iconWireframe from '../public/img/icons/wireframe.svg';

import illustrationDesigner from '../public/img/illustrations/designer.svg';
import illustrationProgrammer from '../public/img/illustrations/programmer.svg';

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
          image={ illustrationDesigner }
          imageAlt='Web Designer'
        >
          <h2>Design</h2>
          <p>We design modern, responsive websites backed by UX research. Combining design aesthetics with functionality, we develop engaging interfaces that put you above your competitors.</p>
        </CardsOne>
        </motion.div>

        <motion.div
          variants={variants}
          initial='hiddenBottom'
          whileInView='show'
          transition={{delay: 0.35}}
        >
        <CardsOne 
          image={ illustrationProgrammer }
          imageAlt='Web Designer'
        >
          <h2>Development</h2>
          <p>Whether it be a simple document sharing app or a comprehensive automation system, we work to deliver UX-optimised mobile and web-based applications using cutting edge technologies.</p>
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
              <div className='service-image'>
                <Image src={ iconWireframe } alt="Wireframe" />
              </div>
              <h3>Website Design</h3>
              <p>Corporate Website, Landing Page, Product Website.</p>

              <Link href="/services/website-design">
                <a>Learn more.</a>
              </Link>

            </div>

            <div className='service'>
              <div className='service-image'>
                <Image src={ iconCustomCode } alt="Custom Code" />
              </div>
              <h3>Web &amp; Mobile App</h3>
              <p>Business dashboards, mobiles apps, custom automation systems.</p>
              <Link href="/services/web-mobile-app">
                <a>Learn more.</a>
              </Link>
            </div>

            <div className='service'>
              <div className='service-image'>
                <Image src={ iconShopping } alt="E-commerce" />
              </div>
              <h3>E-commerce Website</h3>
              <p>Small or well stablished business, we have the right solution for you.</p>
              <Link href="/services/ecommerce-website">
                <a>Learn more.</a>
              </Link>
            </div>

            <div className='service'>
              <div className='service-image'>
                <Image src={ iconSettings } alt="SEO Settings" />
              </div>
              <h3>Search Engine (SEO)</h3>
              <p>Improve your organic traffic for better conversion. Google adWords.</p>
              <Link href="/services/seo">
                <a>Learn more.</a>
              </Link>
            </div>
            
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
        .service-image {
          max-width: 80px;
          display: inline-block;
        }
        .service h3 {
          font-size: 1.75em;
          padding: 20px 0 30px;
        }
        .service a {
          display: inline-block;
          padding: 8px 15px;
          font-weight: 600;
          color: var(--dark-color);
          text-decoration: none;
          transition: color 300ms ease-out;
        }
        .service a:hover {
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