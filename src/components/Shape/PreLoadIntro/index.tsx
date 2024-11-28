import React from 'react'
import styles from './styles.module.scss'

const PreLoadIntro = () => {
  return (
    <div className={styles['load-intro']}>
      <div className={styles['load-intro__1']}>
        <div></div>
      </div>
      <div className={styles['load-intro__3']}>Welcome To Portfolio</div>
      <div className={styles['load-intro__4']}>
        Coded By NextJS <br /> By Tran Hung
      </div>
    </div>
  )
}

export default PreLoadIntro
