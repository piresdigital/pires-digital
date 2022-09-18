import styles from './cards-one.module.css';

export default function CardOne({image, imageAlt, children}){
  return<>
    <div className={styles.card}>
      { image && 
        <div className={styles.image}>
          <img src={image} alt={imageAlt} />
        </div>
      }
      <div className={styles.content}>
        { children }
      </div>
    </div>
  </>
}