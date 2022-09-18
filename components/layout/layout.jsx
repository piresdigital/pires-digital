import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Nav from '../nav/nav';
import styles from './layout.module.css';

export default function Header(props) {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const openMenuRef = useRef(null);
  const closeMenuRef = useRef(null);
  const navOverlayRef = useRef(null);

  useEffect(()=>{

    // watch scroll position
    window.addEventListener('scroll', () => {
      setScrollPos(window.scrollY);
      return () => {
        window.removeEventListener('scroll', this);
      }
    });

    menuOpen ? document.body.classList.add('overflow-hide') : document.body.classList.remove('overflow-hide');
  }, [menuOpen]);

  return <>
    <div className={`${styles.layout} ${ props.header == 'light' ? styles.headerLight : ''}`}>
      <div className={`${styles.bar} ${ scrollPos >= 190 ? styles.barPrimary : '' }`}>

        {/* load different logo based on parent */}
        <div className={styles.logoDark}>
          <Link href="/"><a><img src='/img/logo-dark.png' alt='Pires Digital' /></a></Link>
        </div>
        <div className={styles.logoLight}>
          <Link href="/"><a><img src='/img/logo-light.png' alt='Pires Digital' /></a></Link>
        </div>
        
        <button 
        type='button' 
        ref={openMenuRef} 
        className={styles.openBtn} 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label='Open Menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </button>
      </div>

      <div ref={navOverlayRef} className={`${styles.overlayMenu} ${menuOpen ? styles.open : ''}`}>
        <button 
        type='button' 
        ref={closeMenuRef} 
        className={styles.closeBtn} 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label='Close Menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>

        <Nav isOpen={menuOpen} />

        <div className={`${styles.businessInfo} ${ menuOpen ? styles.animateIn : '' }`}>
          <div className={styles.container}>
            <div>
              <span>Address</span>
              2/146 Simeon Street
              <br />
              Spreydon, Christchurch
            </div>
            <div>
              <span>Socials</span>
              <a href="https://www.instagram.com/pires.digital/" target="_blank">Instagram</a>
              <br />
              <a href="https://www.linkedin.com/company/pires-digital/" target="_blank">LinkedIn</a>
            </div>
            <div>
              <span>Contact Us</span>
              <a href="mailto:hello@piresdigital.com">hello@piresdigital.com</a>
              <br />
              <a href="tel:+64210324709">+64 21 032 4709</a>
            </div>
          </div>
        </div>
      </div>

      
      <main className={styles.main}>{ props.children }</main>

    </div>
  </>
}