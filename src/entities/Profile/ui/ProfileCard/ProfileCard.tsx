import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'

import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  const profileData = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
      </div>
      <div className={cls.data}>
        <Input
          placeholder={t('Firstname')}
          value={profileData?.firstname}
          className={cls.input}
        />
        <Input
          placeholder={t('Lastname')}
          value={profileData?.lastname}
          className={cls.input}
        />
      </div>
    </div>
  )
}
