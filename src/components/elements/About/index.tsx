import React, { useState } from 'react'
import Element from '../../Shape/Element'
import { elementPublicProps } from '../../Shape/Element/common/interface'
import styles from './styles.module.scss'
import plance1 from './common/images/plance-1.png'
import cx from 'classnames'

interface aboutProps extends elementPublicProps {
  activeElement: string
}

const About = (props: aboutProps) => {
  const [active, setActive] = useState(false)
  if (
    (props.activeElement === 'about' ||
      props.activeElement === 'skill' ||
      props.activeElement === 'experience' ||
      props.activeElement === 'projects' ||
      props.activeElement === 'contact') &&
    !active
  ) {
    setActive(true)
  }
  return (
    <Element className={styles.about} targetRef={props.targetRef} id='about'>
      <div className={cx(styles['about'], !active && styles['hidden'])}>
        <div className={styles['about__left']}>
          <div className={styles['about__left--image']}>
            <img src={plance1} alt='plance' />
          </div>
        </div>
        <div className={styles['about__right']}>
          <section>
            <div className={styles['about__right--title']}>About Me</div>
            <div className={styles['about__right--content']}>
              <div>
                Good day, everyone! I'm Tran Van Hung, I'm 26 years old and I'm
                from DakLak. I'm Junior Front-end Developer. I have 2 year
                experience of working as a web developer at HCMC.
              </div>
              <div>
                I'm often praised for my creativity and independent working
                skills. I always put my heart and soul into every single website
                that I develop. I guess that's all I have to share about myself.
                Thank you for reading!
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  )
}

export default About
