import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../components/atoms/_frameranimations';
import Layout from '../components/layout/layout';
import PageTitle from '../components/pageTitle/pageTitle';
import Container from '../components/container/container';
import Footer from '../components/footer/footer';

export default function WebsiteDesign(props){
  return<>
  <Head>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>
      Privacy Policy | Pires Digital a Creative Digital Agency based in Christchurch NZ
    </title>
    <meta
      name='description'
      content=""
    />
  </Head>
  <Layout header='light'>
    <PageTitle title='Privacy Policy'>
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
      <div className='content'>
        <div className="section">
          <p>This privacy policy is effective from September 2022. This policy describes how Pires Digital Limited (Trading as Pires Digital) deals with the collection of your information when you access piresdigital.com, or anytime that you interact with Pires Digital.</p>
          <p>By using our website you agree to allow Pires Digital to collect, store, and use your information as described below.</p>
          <p>If you are looking for more information about our privacy policy then you can contact us via email at hello@piresdigital.com, by phone at +64 21 032 4709 or by mail at Pires Digital Limited, 146 Simeon Street, Unit 2, Spreydon, Christchurch 8024.</p>
        </div>

        <div className="section">
        <h3>Your Information</h3>
        <p>In order to deliver the best service, we collect some personal information from you, including:</p>

        <ul>
          <li>Contact information</li>
          <li>Location</li>
          <li>Interactions with us</li>
          <li>Data around your behaviour on the Pires Digital website</li>
          <li>Information about the computer you are browsing on</li>
          <li>Cookies (see the Cookies policy below)</li>
        </ul>

        <p>We collect your personal information for a couple of different reasons:</p>

        <ul>
          <li>So we can understand how you engage with our website content.</li>
          <li>So we can get in touch with you when you make an enquiry.</li>
          <li>To allow us to provide you with future information about Pires Digital.</li>
        </ul>
        </div>

        <div className="section">
        <h3>Cookies policy</h3>
        <p>This is the Cookie Policy for Pires Digital, accessible from piresdigital.com.</p>

        <h3>What are cookies?</h3>
        <p>Cookies help us understand how visitors engage with our website and services.</p>

        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

        <h3>How we use cookies</h3>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

        <h3>Disabling cookies</h3>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the site. Therefore it is recommended that you do not disable cookies.</p>

        <h3>The cookies we set</h3>
        
        <h3>Forms related cookies</h3>
        <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>

        <h3>Third-party cookies</h3>
        <p>In some cases, we use third-party cookies and other technologies for marketing and to gather website analytics. This includes:</p>

        <p>Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.</p>
        <br />
        <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
        <br />
        <p>You can opt-out of Google Analytics without affecting how you visit our site. For more information on opting out of being tracked by Google Analytics please visit this page.</p>

        <p>You can also ask your browser to delete or block third-party cookies: simply search online for “cookies” + the name of your internet browser (for example, “Google Chrome”) for step-by-step instructions.</p>

        <p>Please contact us if you have any further questions.</p>
        </div>

        <Link href='/contact'>
          <a>Contact Us</a>
        </Link>

        <style jsx>{`
          h3 {
            margin: 40px 0 20px;
          }
          .section {
            margin: 90px 0;
          }
          a {
            text-decoration: none;
            padding-bottom: 8px;
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
          }
        `}</style>
      </div>
      </motion.div>
    </Container>

    <Footer />

  </Layout>
  </>
}