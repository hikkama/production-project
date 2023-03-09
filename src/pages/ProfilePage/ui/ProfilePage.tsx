import { memo, useEffect } from 'react'

import { fetchProfileData, profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  )
})

export default ProfilePage
