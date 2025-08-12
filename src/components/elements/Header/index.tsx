import React from 'react'
import Element from '../../Shape/Element'
import styles from './styles.module.scss'
import { elementPublicProps } from '../../Shape/Element/common/interface'
import footerImage from '../../../assets/images/header-footer-bg.svg'
import platform from '../../../assets/images/platform-1.svg'
import CV from '../../../assets/images/RESUME-TRAN-VAN-HUNG.pdf'
import cx from 'classnames'
import { Col, Row } from 'antd'

interface headerProps extends elementPublicProps {}

const Header = (props: headerProps) => {
  return (
    <Element className={styles.header} targetRef={props.targetRef} id='header'>
      <Row className={styles['header__wrapper']}>
        <Col
          span={24}
          lg={{ span: 9, order: 2 }}
          className={styles['header__wrapper--right']}
        >
          <div className={styles['header__wrapper--right-avatar']}>
            <div className={styles['header__wrapper--right-avatar_bg']}></div>
            <div
              className={styles['header__wrapper--right-avatar_image']}
            ></div>
          </div>
          <div className={styles['header__wrapper--right-image']}>
            <img src={platform} alt='' />
          </div>
        </Col>
        <Col
          span={24}
          lg={{ span: 15, order: 1 }}
          className={styles['header__wrapper--left']}
        >
          <div className={styles['header__wrapper--left-name']}>
            Hello, I'm Hung
          </div>
          <div className={styles['header__wrapper--left-info']}>
            Front-End Developer
          </div>
          <div className={styles['header__wrapper--left-actionButton']}>
            <a href={CV} download>
              <div
                className={cx(
                  styles['btn'],
                  styles['btn__download'],
                  'cursor_small'
                )}
              >
                Download CV
              </div>
            </a>
            <button
              onClick={() =>
                window.scrollTo({
                  top: (document.getElementById(`contact`) as any).offsetTop,
                  behavior: 'smooth'
                })
              }
              className={cx(
                styles['btn'],
                styles['btn__let-talk'],
                'cursor_small'
              )}
            >
              Let's Talk
            </button>
          </div>
        </Col>
      </Row>
      <div className={styles['header__background-footer']}>
        <img src={footerImage} alt='' />
      </div>
    </Element>
  )
}

export default Header
