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
                Front-End Developer with 4 years of experience, including 2
                years specializing in ReactJS/NextJS. Skilled in building
                modern, responsive interfaces, optimizing performance, and
                integrating RESTful APIs for mid-to-large scale products. Strong
                focus on delivering seamless UI/UX and driving measurable
                business impact.
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  )
}

export default About
