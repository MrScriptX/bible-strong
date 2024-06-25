import { useSetAtom } from 'jotai/react'
import { useTranslation } from 'react-i18next'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Snackbar from '~common/SnackBar'
import { TabItem, tabsAtomsAtom } from '../../../state/tabs'
import { useSlideNewTab } from './useSlideNewTab'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackProps } from '~navigation/type'

export const useOpenInNewTab = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackProps>>()
  const route = useRoute<RouteProp<MainStackProps, 'AppSwitcher'>>()
  const { t } = useTranslation()
  const dispatchTabs = useSetAtom(tabsAtomsAtom)
  const { triggerSlideNewTab } = useSlideNewTab()

  const openInNewTab = (
    data?: TabItem,
    params: { autoRedirect?: true } = {}
  ) => {
    const newTabId = `new-${Date.now()}`
    dispatchTabs({
      type: 'insert',
      value: {
        id: newTabId,
        title: t('tabs.new'),
        isRemovable: true,
        type: 'new',
        data: {},
        ...data,
      },
    })

    if (!params.autoRedirect) {
      Snackbar.show(t('tabs.created'), 'info', {
        confirmText: t('common.goTo'),
        onConfirm: () => {
          navigation.navigate('AppSwitcher', route.params)
          triggerSlideNewTab(newTabId)
        },
      })
    } else {
      triggerSlideNewTab(newTabId)
      navigation.navigate('AppSwitcher', route.params)
    }
  }

  return openInNewTab
}
