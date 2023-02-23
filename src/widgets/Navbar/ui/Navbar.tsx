import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/authByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
        {t('Enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
