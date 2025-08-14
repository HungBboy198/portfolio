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
                Good day, everyone! My name is Tran Van Hung, 27 years old, I am
                a passionate Front-End Developer with 4 years of experience in
                building modern, responsive, and user-friendly web interfaces,
                including 2 years of expertise in ReactJS, NextJS. My skill set
                includes crafting clean and maintainable code, optimizing
                performance, and integrating RESTful APIs to deliver dynamic and
                interactive user experiences. I am proficient in HTML, CSS,
                JavaScript, and modern frameworks, with a strong eye for detail
                and a commitment to creating seamless UI/UX.
              </div>
              <div>
                During my time working in this field, I have been involved in
                building and optimizing many modern, interactive user
                interfaces, ensuring both performance and high-quality user
                experience. Additionally, leveraging interaction with AI tools
                has improved my work efficiency and enabled me to gain more
                knowledge from AI.
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  )
}

export default About
