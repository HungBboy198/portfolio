import React, { useState } from 'react'
import { elementPublicProps } from 'src/components/Shape/Element/common/interface'
import Element from '../../Shape/Element'
import styles from './styles.module.scss'
import plance2 from './common/images/plance-2.png'
import cx from 'classnames'

interface SkillsProps extends elementPublicProps {
  activeElement: string
}
const Skills = (props: SkillsProps) => {
  const [active, setActive] = useState(false)
  if (
    (props.activeElement === 'skill' ||
      props.activeElement === 'experience' ||
      props.activeElement === 'projects' ||
      props.activeElement === 'contact') &&
    !active
  ) {
    setActive(true)
  }
  return (
    <Element className={styles.skill} targetRef={props.targetRef} id='skill'>
      <div className={cx(styles['knowledge'], !active && styles['hidden'])}>
        <div className={styles['knowledge__left']}>
          <div className={styles['knowledge__left--title']}>
            My Knowledge
            <br />
            {/* <span>Click show full</span> */}
          </div>

          <div className={styles['knowledge__left--content']}>
            <div className={styles['knowledge__left--content_item']}>HTML</div>
            <div className={styles['knowledge__left--content_item']}>
              LESS/SCSS
            </div>
            <div className={styles['knowledge__left--content_item']}>
              Javascript
            </div>
            <div className={styles['knowledge__left--content_item']}>
              TypeScript
            </div>
            <div className={styles['knowledge__left--content_item']}>
              Bootstrap
            </div>
            <div className={styles['knowledge__left--content_item']}>
              JQuery
            </div>
            <div className={styles['knowledge__left--content_item']}>
              ReacJs
            </div>
            <div className={styles['knowledge__left--content_item']}>
              NextJS
            </div>
          </div>
          <div className={styles['knowledge__left__tools']}>
            <div
              className={cx(
                styles['knowledge__left__tools--title'],
                !active && styles['hidden']
              )}
            >
              Orther
            </div>
            <div
              className={cx(
                styles['knowledge__left__tools--content'],
                !active && styles['hidden']
              )}
            >
              <span>Tools</span>: Lark, Jira, Git, Github, GitLab, Postman,
              Vercel.
            </div>
            <div
              className={cx(
                styles['knowledge__left__tools--content'],
                !active && styles['hidden']
              )}
            >
              <span>Design tools</span>: Photoshop, Figma, Illustrator.
            </div>
          </div>
        </div>

        <div className={styles['knowledge__right']}>
          <img src={plance2} alt='plance ' />
        </div>
      </div>
    </Element>
  )
}

export default Skills
