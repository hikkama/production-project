import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/authByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const userAuthData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onLogout}>
          {t('Quit')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
        {t('Enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
