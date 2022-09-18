import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../../components/atoms/_frameranimations';
import Layout from '../../components/layout/layout';
import PageTitle from '../../components/pageTitle/pageTitle';
import Container from '../../components/container/container';
import Feedback from '../../components/feedback/feedback';
import Footer from '../../components/footer/footer';

export default function EcommerceDesign(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Ecommerce Website | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='E-commerce Website'>
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
          All you need to make <br /><span>your store stand out.</span>
        </h1>
        <p>Showcase your products online. Allow your visitors to browse, add items to their cart, and check out simply and efficiently.</p>
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
              <img className='content_illustration' src="/img/illustrations/web_shopping.svg" alt="Web Shopping" />
              <div className='content_copy'>
                <h2>Ecommerce website with one simple goal.</h2>
                <p>Conversion. You want your ecommerce website to sell, and we are here to make it happen. Even the smallest flaw in the user interface or slightly wrong placement of a call to action can send money to your competitor instead of your bank account. We know the stakes are high.</p>
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
              <img className='content_illustration' src="/img/illustrations/analytics.svg" alt="Scale graph" />
              <div className='content_copy'>
                <h2>Secure, scalable ecommerce website design.</h2>
                <p>You want your ecommerce website to be safe and secure. We follow the industry best practices to ensure the maximum possible security of your ecommerce site. Moreover, your site data will always have regular backups in case of an emergency. Your ecommerce website is guaranteed to be secure, robust, and easily extendable with new features and functionalities. </p>
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
              <img className='content_illustration' src="/img/illustrations/reports.svg" alt="End-to-end Solution" />
              <div className='content_copy'>
                <h2>End-to-end solution for your online business</h2>
                <p>Running an online business is not easy. We understand your pain points. That's why our ecommerce website design service comes with an end-to-end solution. Ability to upload product details from the backend on your own, integration with your favourite payment gateway, loyalty program or promotional campaigns. We've got you covered.</p>
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
              <img className='content_illustration' src="/img/illustrations/shopping.svg" alt="User experience" />
              <div className='content_copy'>
                <h2>User Experience &amp; Information Architecture.</h2>
                <p>When it comes to eCommerce websites, good design stands for more than mere aesthetics. It stands for maximum user comfort, efficient information delivery, effective brand building, reliability. And most importantly, it stands for customised business success.</p>
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