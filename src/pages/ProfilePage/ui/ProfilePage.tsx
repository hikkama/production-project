import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile')

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('Profile page')}</div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
