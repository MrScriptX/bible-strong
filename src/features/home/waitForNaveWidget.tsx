import React from 'react'

import { useWaitForDatabase } from '~common/waitForNaveDB'
import DownloadRequired from '~common/DownloadRequired'
import { DownloadingWidget, WidgetLoading, WidgetContainer } from './widget'
import { useTranslation } from 'react-i18next'

const waitForWidget = WrappedComponent => props => {
  const { t } = useTranslation()
  const {
    isLoading,
    startDownload,
    proposeDownload,
    setStartDownload,
    progress,
  } = useWaitForDatabase()

  if (isLoading && startDownload) {
    return <DownloadingWidget progress={progress} />
  }

  if (isLoading && proposeDownload) {
    return (
      <WidgetContainer>
        <DownloadRequired
          noHeader
          title={t('Thématique nave requise')}
          setStartDownload={setStartDownload}
          fileSize={7}
          small
        />
      </WidgetContainer>
    )
  }

  if (isLoading) {
    return <WidgetLoading />
  }

  return <WrappedComponent {...props} />
}

export default waitForWidget
