import React, { useState } from 'react'
import Element from '../../Shape/Element'
import { elementPublicProps } from 'src/components/Shape/Element/common/interface'
import styles from './styles.module.scss'
import cx from 'classnames'
import plance3 from './common/images/plance-3.png'
interface ExperienceProps extends elementPublicProps {
  activeElement: string
}
const Experience = (props: ExperienceProps) => {
  const [active, setActive] = useState(false)
  if (
    (props.activeElement === 'experience' ||
      props.activeElement === 'projects' ||
      props.activeElement === 'contact') &&
    !active
  ) {
    setActive(true)
  }
  return (
    <Element
      // className={styles.experience}
      targetRef={props.targetRef}
      id='experience'
    >
      <div className={cx(styles['experience'], !active && styles['hidden'])}>
        <div className={styles['experience__left']}>
          <div className={styles['experience__left--image']}>
            <img src={plance3} alt='plance' />
          </div>
        </div>
        <div className={styles['experience__right']}>
          <div className={styles['experience__right--title']}>Experience</div>
          <div className={styles['experience__right--content']}>
            <div className={styles['experience__right--content_item']}>
              <div className={styles['experience__right--content_item-left']}>
                <svg
                  className={cx(styles['line-1'], styles['svg1'])}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 83.28 506.81'
                >
                  <polyline
                    className={styles['cls-1']}
                    points='56.62 13 74.62 77 0.62 206 82.62 290 2.62 395 56.84 496.93'
                  />
                  <path
                    className={styles['cls-2']}
                    d='M55.5.5c12.12,0,19.17,9.2,13.8,13s-9.2,6.91-13,6.14-13.8-1.54-13-6.14S50.13.5,55.5.5Z'
                  />
                  <path
                    className={styles['cls-2']}
                    d='M54.36,487c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.8-1.54-13-6.14S49,487,54.36,487Z'
                  />
                </svg>
              </div>
              <div className={styles['experience__right--content_item-right']}>
                <div>
                  <section
                    className={
                      styles['experience__right--content_item-right_title']
                    }
                  >
                    Comma Media Company.
                  </section>
                  <span>
                    25/7 Nguyen Binh Khiem, Ben Nghe Ward, Dist 1, HCMC,
                    VietNam.
                  </span>
                  <section className='experience__right--content_item-right_work'>
                    Intern Front-end.(11/2019-01/2020)
                  </section>
                  <ul>
                    <li>
                      <article>Main responsibilities:</article>- Convert .psd
                      and .ai files to HTML/CSS/JS with responsive support.
                    </li>
                    <li>
                      <article>Recognition and Gains:</article>- Highly
                      recognized in Front-end development, with strong skills in
                      implementing website animations and effects.
                      <br />- I was offered a full-time position after my
                      internship, but I declined it due to some personal
                      reasons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['experience__right--content_item']}>
              <div className={styles['experience__right--content_item-left']}>
                <svg
                  className={cx(styles['line-1'], styles['svg2'])}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 81.39 538.34'
                >
                  <polyline
                    className={styles['cls-1']}
                    points='53.68 0.26 0.68 88.55 80.68 140.26 6.68 245.06 80.68 357.26 54.89 434.08 54.89 528.76'
                  />
                  <path
                    className={styles['cls-2']}
                    d='M52.79,518.56c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.81-1.54-13-6.14S47.42,518.56,52.79,518.56Z'
                  />
                </svg>
              </div>
              <div className={styles['experience__right--content_item-right']}>
                <div>
                  <section
                    className={
                      styles['experience__right--content_item-right_title']
                    }
                  >
                    Vinasay Company.
                  </section>
                  <span>
                    171 Nguyen Thi Thap, Tan Phu Ward, Dist 7, HCMC, VietNam.
                  </span>
                  <section className='experience__right--content_item-right_work'>
                    Fresher Front-end.(5/2020 - 10/2020)
                  </section>
                  <ul>
                    <li>
                      <article>Main responsibilities:</article>- Plan the idea
                      and design the Vinasay website using Illustrator. <br />-
                      Convert .psd and .ai files to HTML/CSS/JS with responsive
                      support. <br />- Collaborate with the Back-end team to
                      complete the Vinasay website.
                    </li>
                    <li>
                      <article>Recognition and Gains:</article>- Has a good
                      website design mindset and is enthusiastic in supporting
                      the team during the development of the Vinasay website.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['experience__right--content_item']}>
              <div className={styles['experience__right--content_item-left']}>
                <svg
                  className={cx(styles['line-1'], styles['svg2'])}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 81.39 538.34'
                >
                  <polyline
                    className={styles['cls-1']}
                    points='53.68 0.26 0.68 88.55 80.68 140.26 6.68 245.06 80.68 357.26 54.89 434.08 54.89 528.76'
                  />
                  <path
                    className={styles['cls-2']}
                    d='M52.79,518.56c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.81-1.54-13-6.14S47.42,518.56,52.79,518.56Z'
                  />
                </svg>
              </div>
              <div className={styles['experience__right--content_item-right']}>
                <div>
                  <section
                    className={
                      styles['experience__right--content_item-right_title']
                    }
                  >
                    Medpro Company.
                  </section>
                  <span>74 Thành Thái, 12 Ward, Dist 10, HCMC, VietNam.</span>
                  <section className='experience__right--content_item-right_work'>
                    Junior Front-end.(6/2022 - 1/2024)
                  </section>
                  <ul>
                    <li>
                      <article>Main responsibilities:</article>- Responsible for
                      updating the Front-End of Medpro Backoffice (Manager
                      Medpro website, Medpro App)
                      <br /> - Update and add new features to the web
                      application a(
                      <a
                        href='https://medpro.vn'
                        target='_blank'
                        rel='noreferrer'
                        className='cursor_small'
                      >
                        Medpro V1
                      </a>
                      ,{' '}
                      <a
                        href='https://allnew-v2.medpro.com.vn'
                        target='_blank'
                        rel='noreferrer'
                        className='cursor_small'
                      >
                        Medpro V2
                      </a>
                      ,{' '}
                      <a
                        href='https://umc.medpro.com.vn'
                        target='_blank'
                        rel='noreferrer'
                        className='cursor_small'
                      >
                        UMC Website
                      </a>
                      , Medpro CSKH , Medpro Backoffice ).
                      <br />- Convert Figma files to React.js and Next.js with
                      responsive support, RESTful API, Build Medpro Backoffice
                      testing, Build Medpro testing...
                    </li>
                    <li>
                      <article>Recognition and Gains:</article>- Highly
                      appreciated for website UI development mindset. Actively
                      supports the team in the Front-end area.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['experience__right--content_item']}>
              <div
                className={styles['experience__right--content_item-left']}
              ></div>
              <div className={styles['experience__right--content_item-right']}>
                <div>
                  <section
                    className={
                      styles['experience__right--content_item-right_title']
                    }
                  >
                    Freelancer Front End ReactJS
                  </section>
                  <span>At home.</span>
                  <section className='experience__right--content_item-right_work'>
                    Freelancer Front-end.(1/2024 - Present)
                  </section>
                  <ul>
                    <li>
                      <article>Main responsibilities:</article>
                      - Convert Figma files to ReactJS, NextJS and responsive
                      support. <br />- Edit and upgrade the website according to
                      the client's requirements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Experience
