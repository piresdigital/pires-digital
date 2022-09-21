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
          We Build <span>Scalable</span> &amp; <br /> <span>Smart</span> Solutions
        </h1>
        <p>We are a web &amp; app development company that turns your ideas into a new driving force of your business.</p>
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


    <section className='section'>
      <Container>
        <div className="content">

          <motion.div 
            variants={variants}
            initial='hiddenBottom'
            whileInView='show'
            transition={{delay: 0.35}}
            >
            <div className='content_item'>
              <img className='content_illustration' src="/img/illustrations/tailored-design.svg" alt="Tailored Design" />
              <div className='content_copy'>
                <h2>Custom solutions for your business.</h2>
                <p>Our expertise in e-commerce, adtech/martech, and people-to-people fields as well as other business areas helps us develop web and mobile solutions tailored with care for our clients. You can come to us at any stage of your project - from just an idea to architecture, from development to quality assurance and support.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={variants}
            initial='hiddenBottom'
            whileInView='show'
            transition={{delay: 0.35}}
            >
            <div className='content_item content_item--reverse'>
              <img className='content_illustration' src="/img/illustrations/experience-design.svg" alt="Tailored Design" />
              <div className='content_copy'>
                <h2>Mobile Applications</h2>
                <p>To create a fast and smooth app for any platform, we also deliver products with outsourcing app development model. This model gives a reasonable solution to control the budget and other recourses.</p>
                <p>Our team connects conventional essential technologies and architecture with the unique logic of the app. Combined with a polished design and UI/UX an app becomes the one that reaches goals of our customers and wins the hearts of users.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={variants}
            initial='hiddenBottom'
            whileInView='show'
            transition={{delay: 0.35}}
            >
            <div className='content_item'>
              <img className='content_illustration' src="/img/illustrations/mobile-friendly.svg" alt="Tailored Design" />
              <div className='content_copy'>
                <h2>Mobile-friendly and optimised for search engines.</h2>
                <p>We know it's important for your website to be found in the search results. We have a strong SEO team who work with our website designers to make sure your site structure is consistent with the SEO best practices. For most of the businesses, more than 50% of the total website traffic comes from mobile devices. So, we make sure your website has a consistent user experience regardless of the screen sizes.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
      <style jsx>
        {`
        .section{
          margin: 90px 0;
        }
        .content_item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justtify-content: center;
          row-gap: 60px;
          margin-bottom: 90px;
        }
        .content_illustration {
          max-width: 300px;
        }
        .content_copy h2 {
          font-size: 2em;
          margin-bottom: 30px;
          text-transform: capitalize;
        }
        @media screen and (min-width: 800px) {
          .content_item {
            flex-direction: row;
            column-gap: 100px;
            margin-bottom: 200px;
          }
          .content_item--reverse {
            flex-direction: row-reverse;
          }
          .content_illustration {
            max-width: 400px;
          }
          .content_copy {
            font-size: 1.2em;
          }
          .content_copy h2 {
            line-height: 1.25;
            max-width: 70%;
          }
        }
        `}
      </style>
    </section>
    

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