import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import variants from '../components/atoms/_frameranimations';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageTitle from '../components/pageTitle/pageTitle';
import Feedback from '../components/feedback/feedback';
import ContactForm from '../components/forms/contact';
import Footer from '../components/footer/footer';

export default function About() {

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>
          About Us | Pires Digital a Creative Digital Agency based in Christchurch NZ
        </title>
        <meta
          name='description'
          content="We don't just provide creative services. We build relationships. We help businesses of all sizes, making them more efficient and effective."
        />
      </Head>

      <Layout header='light'>
        <PageTitle title='About Us'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </PageTitle>

        <section className='aboutUs'>
          <Container>

            <div className='callout'>
              <div className='title'>
                <motion.div 
                  variants={variants}
                  initial='hiddenLeft'
                  whileInView='show'
                  transition={{delay: 0.35, duration: 0.5}}
                >
                  <h2>We don't just provide creative services. <span className='titleHighlight'>We build relationships.</span></h2>
                </motion.div>
              </div>

              <div className='copy'>
                <motion.div 
                  variants={variants}
                  initial='hiddenRight'
                  whileInView='show'
                  transition={{delay: 0.35, duration: 0.5}}
                >
                  <p>Here at Pires Digital we have a vision for how digital could, and should, be better, more agile, and transparent. We also recognised that New Zealand businesses want better clarity, value.
                  <strong>“Going beyond for our customer success”</strong> is the maxim that drives us.</p>
                </motion.div>
              </div>
            </div>


            <motion.div 
                variants={variants}
                initial='hiddenBottom'
                whileInView='show'
                transition={{delay: 0.5}}
              >
              <div className='card'>
                <div className='copy'>
                  <h2>Our Vision</h2>
                  <p>
                  Our vision is to be the go to web design agency in New Zeland, facilitating sustainable growth and prosperity. 
                  We are continuously evolving to become an industry leader in the vibrant field of web technologies.
                  </p>
                </div>
              </div>
              <div style={{clear: 'both'}}></div>
            </motion.div>

            

            <motion.div 
              variants={variants}
              initial='hiddenBottom'
              whileInView='show'
              transition={{delay: 0.5}}
            >
              <div className='card right'>
                <div className='copy'>
                  <h2>Our Mission</h2>
                  <p>
                  Our Mission is to help businesses of all sizes through their digital journey, allowing them to utilise powerful technologies and improve their processes. 
                  We want to be consistently improving our services, that benefit businesses of all sizes, making them more efficient and effective.
                  </p>
                </div>
              </div>
              <div style={{clear: 'both'}}></div>
            </motion.div>
            
          
          </Container>
          <style jsx>{`

            .aboutUs {
              margin-bottom: 90px;
            }

            {/*  ## Callout
             */}

            .aboutUs .callout {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding-top: 0;
              padding-bottom: 90px;
              font-size: 1.2em;
            }

            .aboutUs .callout .title {
              font-size: 1.55em;
              line-height: 1.25;
              position: relative;
              flex-grow: 1;
              text-align: center;
              margin-bottom: 30px;
            }

            .aboutUs .callout .titleHighlight {
              display: block;
              color: var(--primary-color);
            }

            .aboutUs .callout .copy {
              flex-grow: 1;
              line-height: 1.9;
              text-align: center;
            }

            @media screen and (min-width:  800px) {
              .aboutUs .callout {
                flex-direction: row;
                margin-bottom: 120px;
                padding-top: 50px;
              }

              .aboutUs .callout .title,
              .aboutUs .callout .copy {
                text-align: left;
                padding: 30px;
                width: 50%;
              }

              .aboutUs .callout .title {
                text-align: center;
                line-height: 1.4;
                margin-bottom: 0;
              }
            }

            {/*  ## Card
             */}

            .aboutUs .card {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 1.2em;
              padding: 20px 0 35px 20px;
              border-left: 2px solid var(--primary-color);
            }

            .aboutUs .card .copy h2 {
              position: relative;
              margin-bottom: 16px;
              font-size: 1.7em;
              padding-left: 10px;
            }

            .aboutUs .card .copy h2::before {
              content: '';
              display: block;
              position: absolute;
              top: 4px;
              left: -41px;
              width: 40px;
              height: 40px;
              background-color: var(--primary-color);
              border-radius: 50%;
              animation-name: pulse;
              animation-duration: 1.3s;
              animation-iteration-count: infinite;
              animation-direction: alternate;
            }

            @media screen and (min-width:  800px) {
              .aboutUs .card {
                flex-direction: row;
                justify-content: flex-end;
                border-right: 2px solid var(--primary-color);
                border-left: none;
                width: 50%;
                float: left;
                text-align: right;
                padding: 20px 20px 35px 0;
              }

              .aboutUs .card.right {
                flex-direction: row-reverse;
                float: right;
                border-left: 2px solid var(--primary-color);
                border-right: none;
                transform: translateX(-2px);
                text-align: left;
              }

              .aboutUs .card .copy {
                padding-left: 30px;
              }

              .aboutUs .card .right .copy {
                padding-left: 0;
                padding-right: 30px;
              }

              .aboutUs .card .copy h2 {
                padding-bottom: 20px;
                padding-right: 20px;
              }

              .aboutUs .card .copy h2::before {
                left: auto;
                right: -41px;
              }

              .aboutUs .card.right .copy h2::before {
                right: auto;
                left: -52px;
              }
            }

            @keyframes pulse {
              from {
                transform: scale(0);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </section>

        <section className='ourValues'>
          <motion.div
          variants={variants}
          initial='hiddenBottom'
          whileInView='show'
          >
            <Container>
              <h2>Our Values</h2>
              <div className='columns'>

              <motion.div
                variants={variants}
                initial='hiddenBottom'
                whileInView='show'
                transition={{delay: 0.4}}
                >
                  <div className='column'>
                    <h3><span>01</span> Respect</h3>
                    <p>The way we view our client relationships is one of our defining characteristics. We partner up with our clients to overcome the problems together.</p>
                  </div>
                </motion.div>

                <motion.div
                variants={variants}
                initial='hiddenBottom'
                whileInView='show'
                transition={{delay: 0.6}}
                >
                  <div className='column'>
                    <h3><span>02</span> Integrity</h3>
                    <p>Developing close, honest relationships with our clients means we are genuinely driven to see them find success. This is what brings out our best work.</p>
                  </div>
                </motion.div>

                <motion.div
                variants={variants}
                initial='hiddenBottom'
                whileInView='show'
                transition={{delay: 0.8}}
                >
                  <div className='column'>
                    <h3><span>03</span> Innovation</h3>
                    <p>We offer solutions to our clients problems by applying the latest technologies available. This allows us to solve business problems more effectively</p>
                  </div>
                </motion.div>
              
              </div>
            </Container>
          </motion.div>
          <style jsx>{`

            .ourValues {
              padding:60px 0;
              font-size: 1.2em;
              color: #fff;
              background-color: var(--primary-color);
            }

            .ourValues .columns {
              display: flex;
              flex-direction: column;
            }

            .ourValues .column {
              position: relative;
              padding-bottom: 50px;
            }

            .ourValues h2 {
              margin: 20px 0 40px;
              font-size: 1.7em;
            }

            .ourValues h3 {
              margin-bottom: 30px;
            }

            .ourValues h3 span {
              font-size: 0.6em;
              color: rgba(255,255,255,0.7)
            }

            @media screen and (min-width: 800px) {
              .ourValues {
                margin-top: 200px;
                margin-bottom: 160px;
                padding: 90px 0 120px;
              }
              .ourValues .columns {
                flex-direction: row;
              }
              .ourValues .column {
                padding: 0 25px;
              }
              .ourValues h2 {
                text-align: center;
                font-size: 2em;
                margin-bottom: 90px;
              }
              .ourValues h3 {
                font-size: 1.4em;
              }
            }
          `}</style>
        </section>

        <motion.div
         variants={variants}
         initial='hiddenBottom'
         whileInView='show'
        >
          <Feedback />
        </motion.div>

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
  );
}