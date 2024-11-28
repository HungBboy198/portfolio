import React from 'react'
import styles from './styles.module.scss'
import { defaultLayoutProps } from '../interface'
import cx from 'classnames'

const DefaultLayout = (props: defaultLayoutProps) => {
  return (
    <>
      <div className={cx(styles.layout, props?.className)}>
        {props.children}
      </div>
    </>
  )
}

export default DefaultLayout
