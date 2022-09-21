import { useEffect, useRef, useState } from 'react';

export default function ToTop() {
  const buttonRef = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {

    buttonRef.current.addEventListener('click', (e) => {
      e.preventDefault();

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

    });

    window.addEventListener('scroll', () => {
      const yPos = window.scrollY;
      const minScroll = window.innerHeight * 0.3;

      yPos >= minScroll ? setShow(true) : setShow(false);

      return () => {
        window.removeEventListener('scroll', this);
      }
    });
    

  },[]);

  return(
    <> 
    <div className={`scroll-to-top ${ show ? 'visible' : '' } primary`}>
      <a ref={ buttonRef }>&uarr;</a>
    </div>

    <style jsx>
      {`
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 10px;
        opacity: 0;
        z-index: -1;
        transition: opacity 300ms ease-out;
      }
      .visible {
        z-index: 999;
        opacity: 1;
      }
      .scroll-to-top a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: opacity 300ms ease-out;
        background-color: var(--primary-color-300);
        color: #fff;
        opacity: 0.7;
      }
      .scroll-to-top a:hover {
        opacity: 1;
      }
      
      @media screen and (min-width: 800px) {
        .scroll-to-top {
          bottom: 60px;
          right: 60px;
        }
      }
      `}
    </style>
    </>
  );
}