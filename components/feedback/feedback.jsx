import { useState } from 'react';
import Container from '../container/container';
import styles from './feedback.module.css';

export default function Feedback(){

  return<>
  <section className={styles.feedback}>
    <Container>
      <h2>We love our customers, <span>and <span>they love</span> our work.</span></h2>
      
      <div className={styles.items}>

        <div className={styles.item}>
          <div className={styles.text}>
            <p>Amazing service, the team at Make My Website took the time to build the perfect website for my business. We worked together to capture the right aesthetic and a user friendly website that outweighs the competition! Would highly recommend to anyone who needs a new website or even a refresh. Fantastic value!</p>
          </div>
          <div className={styles.details}>
            <img src='https://ui-avatars.com/api/?name=Jucelia+Pereira' alt='Jucelia Pereira' />
            <h4>
              Jucelia Pereira
              <span><a href='https://jdsspiffycleaners.co.nz' target='_blank'>JD's Spiffy Cleaners</a></span>
            </h4>
          </div>
        </div>

        {/* <div className={styles.item}>
          <div className={styles.text}>
            <p></p>
          </div>
          <div className={styles.details}>
            <img src='https://ui-avatars.com/api/?name=Name+Client' alt='Client Name' />
            <h4>
              Client Name
              <span>Job Title</span>
            </h4>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.text}>
            <p></p>
          </div>
          <div className={styles.details}>
            <img src='https://ui-avatars.com/api/?name=Name+Client' alt='Client Name' />
            <h4>
              Client Name
              <span>Job Title</span>
            </h4>
          </div>
        </div> */}

      </div>

    </Container>
  </section>
  </>
}