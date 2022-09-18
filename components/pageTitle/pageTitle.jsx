import styles from './pageTitle.module.css';

export default function PageTitle(props){
  return<>
    <section className={styles.pageTitle} >
      {
        props.background &&
        <div className={styles.background} style={{backgroundImage: `url(${props.background})`}}></div>
      }
      <div className={styles.container}>
        <h1>{ props.title }</h1>
        <ul className={styles.breadcrumb}>
          { props.children }
          <li>{ props.title }</li>
        </ul>
      </div>
    </section>
  </>
}