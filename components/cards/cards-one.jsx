import Image from 'next/image';
import styles from './cards-one.module.css';

export default function CardOne({image, imageAlt, children}){
  return<>
    <div className={styles.card}>
      { image && 
        <div className={styles.image}>
          <span>
            <Image src={image} alt={imageAlt} />
          </span>
        </div>
      }
      <div className={styles.content}>
        { children }
      </div>
    </div>
  </>
}