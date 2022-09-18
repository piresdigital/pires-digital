import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav(props) {
    
  return<>
  <nav className={`${props.isOpen ? styles.animateIn : ''} ${styles.nav}`}>
    <div className={styles.container}>
      <ul>
        <li>
          <Link href='/'>
          <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
          <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/services'>
          <a>Services</a>
          </Link>
        </li>
        {/* <li>
          <Link href='/portfolio'>
          <a>Portfolio</a>
          </Link>
        </li> */}
        <li>
          <Link href='/contact'>
          <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  </>
}