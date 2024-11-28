import React from 'react'
import { elementProps } from './common/interface'
import cx from 'classnames'
import styles from './styles.module.scss'

const Element = (props: elementProps) => {
  return (
    <div
      className={cx(styles.element, props.className)}
      ref={props.targetRef}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default Element
