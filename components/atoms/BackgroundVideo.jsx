export default function BackgroundVideo ({src, height}) {

  return (
  <>

  <div className='background background__right'>
    <video className='video' autoPlay muted loop>
      <source src={ src } type='video/mp4' />
    </video>
  </div>

  <style jsx>
    {`
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${ height ? height : '100%' };
      z-index: -1;
    }

    .background__right {
      width: 40%;
      height: 70%;
      right: 10%;
      left: auto;
      top: 15%;
    }

    .video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    `}
  </style>
  
  </>
  )
}