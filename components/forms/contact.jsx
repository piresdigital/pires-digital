import { useState, useRef } from 'react'; 
import Container from '../container/container';

import styles from './contact.module.css';

export default function ContactForm(){
  const [formMessage, setFormMessage] = useState(false);
  const submitButtonRef = useRef(null);

  const escape = (value) => {
    const valueEscaped = value.trim()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\//g, '&#x2F;')
      .replace(/\\/g, '&#x5C;')
      .replace(/`/g, '&#96;');
    return valueEscaped;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.setAttribute('disabled', 'disabled');

    submitButtonRef.current.value = 'Sending Your Message.';

    const formData = {
      name : escape(e.target.name.value),
      email : escape(e.target.email.value),
      phone : escape(e.target.phone.value),
      companyName : escape(e.target.companyName.value),
      message : escape(e.target.message.value)
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      if(res.status == 200){
        setFormMessage('Thank you! We will be in touch very soon.');

        submitButtonRef.current.value = 'Send Message';
        e.target.reset();

      } else {
        setFormMessage('Sorry, we were unable to receive your message. Please call us on +64 21 032 4709');

      }
    });

  }

  return(
  <>
  <section className={styles.contactForm}>
    <Container>
      <span className={styles.subtitle}>Contact Us</span>
      <h2 className={styles.title}>Fill out the form and we'll be in touch soon.</h2>
      <div className={styles.flexContainer}>

        <div className={styles.details}>
          <h4>Alternatively, you can email or call us on:</h4>
          <div className={styles.phone}>
            <span>Call Us</span>
            <a href='tel:+64210324709'>+64 21 032 4709</a>
          </div>
          <div className={styles.email}>
            <span>Email Us</span>
            <a href='mailto:hello@piresdigital.com'>hello@piresdigital.com</a>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input type='text' name='name' placeholder='John Doe *' maxLength='26' minLength='3' required />
            </div>
            <div className={styles.formGroup}>
              <input type='email' name='email' placeholder='email@email.com *' required />
            </div>
            <div className={styles.formGroup}>
              <input type='text' name='phone' placeholder='03 123 456 *' maxLength='26' minLength='9' required />
            </div>
            <div className={styles.formGroup}>
              <input type='text' name='companyName' maxLength='26' placeholder='Company Name' />
            </div>
            <div className={styles.formGroup}>
              <textarea name='message' placeholder='Write your message. *' required></textarea>
            </div>
            <div className={styles.formGroup}>
              <input ref={submitButtonRef} type='submit' name='submit' value='Send Message' />
              <span className={styles.formMessage}>{ formMessage }</span>
            </div>
          </form>
        </div>

      </div>
    </Container>
  </section>
  </>
  );
}