import Container from '../container/container';

import styles from './cards-two.module.css';

export default function CardTwo(){
  return<>
  <div className={styles.cardsTwo}>
  <Container>
  
    <div className={styles.cards}>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/img/design-icon.svg" alt="Custom UI Design" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Design</span>Custom UI Design</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/img/cms-icon.svg" alt="CMS Websites" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Development</span> CMS Websites</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="img/shopping-icon.svg" alt="Ecommerce Website" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Development</span> Ecommerce Websites</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/img/ai-icon.svg" alt="Graphic Design" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Design</span> Graphic Design</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/img/graph-icon.svg" alt="Website SEO" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Development</span> Website SEO</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/img/like-icon.svg" alt="Web Design" />
        </div>
        <div className={styles.content}>
          <h2><span>Web Design</span> Social Media Ad</h2>
          <p></p>
          {/* <a className={styles.button} href="#">Learn More</a> */}
        </div>
      </div>

    </div>
  
  </Container>
  </div>
  </>
}