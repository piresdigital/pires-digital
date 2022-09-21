import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../../components/atoms/_frameranimations';
import Layout from '../../components/layout/layout';
import PageTitle from '../../components/pageTitle/pageTitle';
import Container from '../../components/container/container';
import Feedback from '../../components/feedback/feedback';
import Footer from '../../components/footer/footer';

export default function Seo(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      SEO Content Services | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='SEO (Search Content Optimization)'>
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
          <span>Increase revenue </span><br />and drive more traffic <br /> to your website
        </h1>
        <p>It's not enough to have a website and hope that people will visit it. You need an expert SEO optimisation strategy to get your business to the top of the natural search engine results pages.</p>
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
            font-size: 1em;
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
              <img className='content_illustration' src="/img/illustrations/growth-analytics.svg" alt="Grow your online presence" />
              <div className='content_copy'>
                <h2>Grow Your Online Presence With Us</h2>
                <p>Skyrocket your rankings and drive your business further online with customised search engine optimisation services for your business. We help you generate meaningful, organic web traffic for your website.</p>
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
              <img className='content_illustration' src="/img/illustrations/scale-business.svg" alt="Scale your business" />
              <div className='content_copy'>
                <h2>Scale Your Business using Google AdWords</h2>
                <p>Google Ads are the fastest method to boost your online traffic and accelerate business growth. It's digital marketing that delivers instant results - you'll reach potential customers searching for your product or service in just a few days. By using Google Ads or other PPC traffic sources, you stay ahead of your competitors and proactively find customers rather than sitting around waiting for them to find you. What makes Google Ads and PPC marketing so powerful is scalability. You can test the ads in a small sample and ensure every detail is optimised for converting browsers into buyers. Once you find a winning formula, you can increase the scale and watch as the sales flow in like clockwork.</p>
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
              <img className='content_illustration' src="/img/illustrations/data-trends.svg" alt="Data trends" />
              <div className='content_copy'>
                <h2>Why Right NOW Is The Best Time To Invest In Google Ads</h2>
                <p>Recent statistics show 46% of internet users can't tell the difference between paid ads and organic results. That's because targeted ads are becoming smarter and harder to recognise. There has literally never been a better time to invest in PPC advertising than right now. </p>
                <p>Of course, you still need to devise and implement an effective strategy. Our expert team can monitor your progress, then use data to fine-tune your campaign and improve results. We'll optimise for conversions, not clicks, to minimise your total cost and maximise your profits.</p>
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