import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../../components/atoms/_frameranimations';
import Layout from '../../components/layout/layout';
import PageTitle from '../../components/pageTitle/pageTitle';
import Container from '../../components/container/container';
import Feedback from '../../components/feedback/feedback';
import Footer from '../../components/footer/footer';

export default function WebsiteDesign(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Website Design | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='Website Design'>
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
          <span>Inspiring Design.</span><br />
          Empowering Technology.
        </h1>
        <p>We are a strategic partner to our clients. We will help you to ideate, design and implement your product from conception to iterative development support, always taking the initiative and working proactively.</p>
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
                <h2>Tailored design to your business needs.</h2>
                <p>You want a website that is customised to your specific requirements. That's why we never use pre-set templates in our web design. All our custom website designs are built from the ground up with your requirements in mind. We take the time to learn about your business, your customers, and specific needs so that your website is not only beautiful but also helpful to grow your business in a meaningful way.</p>
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
                <h2>Truly usable websites that drives conversion.</h2>
                <p>Best website design is not just about looking great. Your website needs to be user-friendly and optimised for conversions. Our UX experts do in-depth research and planning on user-flow to make your website as intuitive and seamless as possible. We take your website through multiple testing phases to ensure it meets your customer needs.</p>
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