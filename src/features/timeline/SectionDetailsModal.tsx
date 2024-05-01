import React from 'react'
import { Modalize } from 'react-native-modalize'

import { useTheme } from '@emotion/react'
import { Image } from 'expo-image'
import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import InlineLink from '~common/InlineLink'
import Box from '~common/ui/Box'
import Paragraph from '~common/ui/Paragraph'
import Text from '~common/ui/Text'
import useLanguage from '~helpers/useLanguage'
import { wp } from '~helpers/utils'
import { Theme } from '~themes'
import { ShallowTimelineSection } from './types'

interface Props extends ShallowTimelineSection {
  modalRef: React.RefObject<Modalize>
  HeaderComponent?: React.ReactNode
  FooterComponent?: React.ReactNode
}

const width = wp(50, 500)

const SectionDetailsModal = ({
  modalRef,
  FooterComponent,
  HeaderComponent,
  id,
  image,
  color,
  description,
  descriptionEn,
  title,
  titleEn,
  sectionTitle,
  sectionTitleEn,
  subTitle,
  subTitleEn,
  startYear,
  endYear,
  interval,
}: Props) => {
  const theme: Theme = useTheme()
  const isFR = useLanguage()
  const { t } = useTranslation()

  return (
    <Modalize
      ref={modalRef}
      modalTopOffset={useSafeAreaInsets().top}
      modalStyle={{
        backgroundColor: theme.colors.lightGrey,
        maxWidth: 600,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      FooterComponent={FooterComponent}
      HeaderComponent={HeaderComponent}
    >
      <Box flex center px={50} py={60}>
        <Text title fontSize={20}>
          {isFR ? sectionTitle : sectionTitleEn}
        </Text>

        <Text py={30} fontSize={35} title textAlign="center">
          {(isFR ? title : titleEn).toUpperCase()}
        </Text>

        <Box>
          <Box height={2} bg="default" />

          <Text py={3} textAlign="center" title>
            {isFR ? subTitle : subTitleEn}
          </Text>
          <Box height={2} bg="default" />
        </Box>
        <Box row width={width} mt={50} lightShadow borderRadius={10}>
          <Image
            style={{ width, height: width, borderRadius: 10 }}
            source={{
              uri: image,
            }}
          />
        </Box>
        <Box
          lightShadow
          bg={color}
          width={50}
          height={10}
          borderRadius={10}
          my={50}
        />
        <Paragraph>{isFR ? description : descriptionEn}</Paragraph>
        <Paragraph scale={-2} mt={80} textAlign="center">
          {`${t('Vous souhaitez aller plus loin ?')}\n`}
          <InlineLink
            scale={-2}
            href="https://www.bibleuniverse.com/study-tools/storacles/c/3/l/french"
          >
            {t('Cliquez ici')}
          </InlineLink>
        </Paragraph>
      </Box>
    </Modalize>
  )
}

export default SectionDetailsModal
