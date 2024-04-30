import React, { useMemo } from 'react'

import { atom } from 'jotai/vanilla'
import { useTranslation } from 'react-i18next'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { NavesTab } from '../../state/tabs'
import NaveTabScreen from './NaveTabScreen'

interface NaveScreenProps {}

const NaveScreen = ({
  navigation,
}: NavigationStackScreenProps<NaveScreenProps>) => {
  const { t } = useTranslation()
  const onTheFlyAtom = useMemo(
    () =>
      atom<NavesTab>({
        id: `naves-${Date.now()}`,
        title: t('Thèmes Nave'),
        isRemovable: true,
        hasBackButton: true,
        type: 'naves',
        data: {},
      } as NavesTab),
    []
  )

  return (
    <NaveTabScreen
      navesAtom={onTheFlyAtom}
      navigation={navigation}
      hasBackButton
    />
  )
}
export default NaveScreen
