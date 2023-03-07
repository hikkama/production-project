import { memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
	MAIN = 'main',
	ERROR = 'error'
}

interface TextProps {
	className?: string
	title?: string
	description?: string
	theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    description,
    theme = TextTheme.MAIN,
  } = props

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  )
})
