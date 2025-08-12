import React, { useState } from 'react'
import cx from 'classnames'
import { elementPublicProps } from 'src/components/Shape/Element/common/interface'
import Element from '../../Shape/Element'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import { dataProjects } from '../../../utils/fakeData/dataProjects'
import { SwiperOptions } from 'swiper/types/swiper-options'
import { Modal, Button } from 'antd'
import styles from './styles.module.scss'

interface ProjectsProps extends elementPublicProps {
  activeElement: string
}
const Projects = (props: ProjectsProps) => {
  const [active, setActive] = useState(false)
  const [video, setVideo] = useState<string | undefined>(undefined)

  if (
    (props.activeElement === 'projects' || props.activeElement === 'contact') &&
    !active
  ) {
    setActive(true)
  }

  const setting: SwiperOptions = {
    navigation: true,
    pagination: {
      clickable: true,
      type: 'progressbar'
    },
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 640px
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      // when window width is >= 768px
      1090: {
        slidesPerView: 3
      }
    }
  }
  return (
    <Element targetRef={props.targetRef} id='projects'>
      <>
        <div className={cx(styles['projects'], !active && styles['hidden'])}>
          <div className={styles['projects__title']}>Projects</div>
          <div className={styles['projects__content']}>
            <Swiper
              {...setting}
              className={cx(styles['projects__content-slider'], 'mySwiper')}
            >
              {dataProjects?.map((item: any, index: number) =>
                index === 3 ? (
                  <SwiperSlide key={index}>
                    <div
                      className={cx(
                        styles['projects__content--item']
                        // styles['hidden-project']
                      )}
                    >
                      <div className={styles['projects__content--item_card']}>
                        <div
                          className={
                            styles['projects__content--item_content-title']
                          }
                        >
                          {item.name}
                        </div>
                        <div
                          className={styles['projects__content--item_freelane']}
                        >
                          {item?.list &&
                            item?.list.map((el: any, i: number) => (
                              <a
                                key={i}
                                href={el.link || '/'}
                                target='_blank'
                                rel='noreferrer'
                                className={cx(
                                  'cursor_small',
                                  styles[
                                    'projects__content--item_freelane-card'
                                  ]
                                )}
                              >
                                <div
                                  className={
                                    styles[
                                      'projects__content--item_freelane-card_logo'
                                    ]
                                  }
                                >
                                  <img src={el.image} alt='logo' />
                                </div>
                                <div
                                  className={
                                    styles[
                                      'projects__content--item_freelane-card_info'
                                    ]
                                  }
                                >
                                  <div>{el.name}</div>
                                  <span>{el.link}</span>
                                </div>
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={index}>
                    <div
                      className={cx(
                        styles['projects__content--item']
                        // styles['hidden-project']
                      )}
                    >
                      <div className={styles['projects__content--item_card']}>
                        <img src={item.image} alt='project' />
                        <div
                          className={styles['projects__content--item_content']}
                        >
                          <div
                            className={
                              styles['projects__content--item_content-title']
                            }
                          >
                            {item.name}
                          </div>
                          <div
                            className={
                              styles[
                                'projects__content--item_content-description'
                              ]
                            }
                          >
                            <span>{item.isProject}</span>
                            <section>
                              <span>- Team size: </span> {item.teamSize}.
                            </section>
                            <section>
                              <span>- Technologies: </span> {item.technologies}
                            </section>
                            <section>
                              <span>- Functions such as: </span> {item.suchAs}
                            </section>
                          </div>
                          <div
                            className={
                              styles['projects__content--item_content-button']
                            }
                          >
                            {item.video && (
                              <button
                                onClick={() => setVideo(item.video)}
                                className={cx(
                                  'cursor_small',
                                  item.id === '3' && styles['demo-front-end']
                                )}
                              >
                                Watch Demo
                                {/* {item.id === '3'
                            ? 'Watch Demo Front-end'
                            : 'Watch Demo'} */}
                              </button>
                            )}
                            {item.link && (
                              <a
                                href={item.link}
                                target='_blank'
                                rel='noreferrer'
                                className={cx(
                                  'cursor_small',
                                  styles['live'],
                                  !item.video && styles['full']
                                )}
                              >
                                {item?.newPrj ? 'Live Website' : 'Live Demo'}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
        <Modal
          footer={null}
          open={video ? true : false}
          onCancel={() => setVideo(undefined)}
          className={styles['modal']}
          width={'80vw'}
        >
          <div className={styles['video']}>
            <iframe
              width='100%'
              height='100%'
              title='trailer'
              src={`https://www.youtube-nocookie.com/embed/${video}`}
            />
          </div>
          <div className={styles['btn-close']}>
            <Button
              onClick={() => setVideo(undefined)}
              className={styles['btn']}
              type='default'
            >
              X
            </Button>
          </div>
        </Modal>
      </>
    </Element>
  )
}

export default Projects
