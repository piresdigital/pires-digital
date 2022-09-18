import Link from 'next/link';
import Container from '../container/container';

import styles from './footer.module.css';

export default function Footer() {
  return <>
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerNav}>
        <div className={styles.logo}>
          <img src="/img/logo-light.png" alt="Pires Digital" />
        </div>
        <div className={styles.nav}>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href='/services/website-design'>
                <a>Website Design</a>
              </Link>
            </li>
            <li>
              <Link href='/services/ecommerce-website'>
                <a>Ecommerce Website</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/services/web-mobile-app'>
                <a>Web &amp; Mobile App</a>
              </Link>
            </li>
            <li>
              <Link href='/services/seo'>
                <a>Search Engine (SEO)</a>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className={styles.nav}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href='/privacy-policy'>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav}>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href='https://www.instagram.com/pires.digital/' target='_blank'>Instagram</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/pires-digital/' target='_blank'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copywrite}>
        &copy; 2022 Pires Digital. All rights reserved.
      </div>
    </Container>
  </footer>
  </>
}