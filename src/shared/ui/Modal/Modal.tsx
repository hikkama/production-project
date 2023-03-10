import {
  MouseEvent, ReactNode, useRef, useState, useEffect, useCallback, MutableRefObject,
} from 'react'

import { Portal } from 'shared/ui/Portal/Portal'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

import cls from './Modal.module.scss'

interface ModalProps {
	className?: string
	isOpen?: boolean
	children?: ReactNode
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    lazy,
    children,
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const closeHandler = useCallback(() => {
    if (!onClose) {
      return
    }
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
      setIsMounted(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
