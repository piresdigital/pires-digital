import Link from 'next/link';
import { motion } from 'framer-motion';

import Metaball from '../atoms/metaball';
import styles from './hero.module.css';

export default function Hero() {
  const variants = {
    in: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: (custom * 0.17) + 0.3, 
        duration: 0.4
      }
    }),
    out: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0
      }
    }
  }

  return<>
  <div className={`${styles.hero} ${styles.fullscreen}`}>
    <Metaball />
    <div className={`${styles.content}`}>
      <div className={styles.container}>
        <motion.h1 
          variants={variants}
          initial='out'
          animate='in'
          custom={1}
        >Design. Development.<span> Craftsmanship.</span></motion.h1>
        <motion.h3
          variants={variants}
          initial='out'
          animate='in'
          custom={2}
        >We design exceptional user experiences and develop groundbreaking products for leading companies.</motion.h3>
        <Link href='/services'>
          <motion.a 
            className={styles.button}
            variants={variants}
            initial='out'
            animate='in'
            custom={3}
          >Our Services</motion.a>
        </Link>
      </div>

      <div className={styles.socials}>
        <a href='https://www.instagram.com/pires.digital/' target='_blank'>Instagram</a>
        <a href='https://www.linkedin.com/company/pires-digital/' target='_blank'>LinkedIn</a>
      </div>
    </div>
  </div>
  </>
}