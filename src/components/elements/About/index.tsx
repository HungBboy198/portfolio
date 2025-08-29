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
                Frontend Developer with 4 years of experience, including 2 years
                specializing in ReactJS/NextJS. Strong expertise in building
                high performance, scalable, and user centric interfaces for
                healthcare, SaaS, and e-commerce platforms. Proven ability to
                optimize performance, streamline user journeys, and deliver
                measurable Business results.
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  )
}

export default About
