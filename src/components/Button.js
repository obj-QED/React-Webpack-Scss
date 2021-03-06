import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const Button = ({ to, className, children, size, variant, classes }) => (
  (classes = classNames(
    'button',
    {
      // Default
      'py-3 px-4 rounded-md text-base leading-6 font-medium transition-all': size === 'default',
      // Variants
      'bg-gray-900 text-white': variant === 'dark',
      'bg-transparent border border-gray-900 text-gray-900 h-12 hover:bg-gray-900 hover:text-white': variant === 'light-border',
      // Size
      'text-base leading-6 font-medium': size === 'normal',
    },
    className
  )),
  to ? (
    <a className={classes} href={to} target='_blank'>
      {children}
    </a>
  ) : (
    <Link to={to} target='_blank' className={classes}>
      {children}
    </Link>
  )
)