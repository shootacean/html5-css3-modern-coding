import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const WorkBox = (imageName: string) => {
    return (
      <div className={`${styles.workBox} ${styles[imageName]}`}>
        <div className={styles.workImageWrapper}>
          <Image className={styles.workImage} src={`/images/${imageName}.jpg`} alt="制作事例" width="500px" height="300px" />
        </div>
        <div className={styles.workDescription}>
          <div className={styles.workDescriptionInner}>
            <p className={styles.workText}>
              制作事例が入ります。<br />
              簡単な説明が入ります。<br />
              使用ツール：XXX, XXX, XXX<br />
              <a href="#" className={`${styles.button} ${styles.buttonGhost}`}>Read More</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>シングルページレイアウト</title>
      </Head>
      <header className={styles.header}>
        <p className={styles.siteTitleSub}>Web designer's portfolio.</p>
        <h1 className={styles.siteTitle}>Hi, My Name Is ...</h1>
        <p className={styles.siteDescription}>Check out some of my works.</p>
        <div className={styles.buttons}>
          <a href="#about" className={styles.button}>Learn More</a>
          <a href="#contact" className={`${styles.button} ${styles.buttonShowy}`}>Send Message</a>
        </div>
      </header>
      <section className={styles.about} id='about'>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.aboutText}>
          はじめまして。日本でWebデザインをしています。<br />
          デザインの専門学校を卒業し、制作会社での業務経験を経て、現在はフリーランスとして働いています。
        </p>
        <p className={styles.aboutText}>
          このサイトは「HTML/CSS モダンコーディング」という書籍のサンプルとしてつくられた、架空のWebデザイナーのポートフォリオサイトです。
        </p>
      </section>
      <section className={styles.works} id='works'>
        <h2 className={styles.heading}>Works</h2>
        <div className={styles.worksWrapper}>
          {WorkBox('tree')}
          {WorkBox('building')}
          {WorkBox('lake')}
          {WorkBox('sky')}
        </div>
      </section>
      <section className={styles.skills} id='skills'></section>
      <section className={styles.contact} id='contact'></section>
      <footer className={styles.footer}></footer>
    </>
  )
}

export default Home
