import styled from '@emotion/native'
import * as Icon from '@expo/vector-icons'
import React, { memo, useState } from 'react'
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { useSelector } from 'react-redux'
import Link from '~common/Link'
import Box from '~common/ui/Box'
import Button from '~common/ui/Button'
import { FeatherIcon, MaterialIcon } from '~common/ui/Icon'
import Paragraph from '~common/ui/Paragraph'
import RoundedCorner from '~common/ui/RoundedCorner'
import Text from '~common/ui/Text'
import extractFirstName from '~helpers/extractFirstName'
import extractInitials from '~helpers/extractInitials'
import useLogin from '~helpers/useLogin'
import { useIsPremium } from '~helpers/usePremium'
import PreloadBible from './PreloadBible'

import { useTranslation } from 'react-i18next'
import { shallowEqual } from 'recompose'
import OfflineNotice from './OfflineNotice'
import VerseOfTheDay from './VerseOfTheDay'
import Spacer from '~common/ui/Spacer'

const vodNb = [...Array(6).keys()]

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.lightGrey,
  paddingTop: Platform.OS === 'ios' ? 20 : 45,
  paddingBottom: 0,
}))

const ProfileImage = styled.Image(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: theme.colors.tertiary,
  alignItems: 'center',
  justifyContent: 'center',
}))

const ProfileContainer = styled.View(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 30,
  shadowColor: theme.colors.primary,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 1,
  backgroundColor: 'white',
  position: 'relative',
  overflow: 'hidden',
  borderWidth: 3,
  borderColor: theme.colors.lightGrey,
  alignItems: 'center',
  justifyContent: 'center',
}))

const GenerateImageContainer = ProfileImage.withComponent(Box)

const GenerateImage = ({ name }) => (
  <GenerateImageContainer>
    {name ? (
      <Text color="reverse" bold fontSize={24}>
        {extractInitials(name)}
      </Text>
    ) : (
      <FeatherIcon name="user" color="reverse" size={30} />
    )}
  </GenerateImageContainer>
)

const getPluriel = (word, count) => `${word}${count > 1 ? 's' : ''}`

const Chip = styled(Link)(({ theme, hightlighted }) => ({
  borderRadius: 10,
  backgroundColor: theme.colors.reverse,
  paddingVertical: 10,
  paddingHorizontal: 13,
  marginRight: 10,
  shadowColor: 'rgb(89,131,240)',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 7,
  elevation: 1,
  overflow: 'visible',

  ...(hightlighted && {
    elevation: 0,
    shadowOpacity: 0,
  }),
}))

const ChipIcon = styled(Icon.Feather)(({ theme, color }) => ({
  color: theme.colors[color] || theme.colors.grey,
  marginRight: 5,
}))

const UserWidget = () => {
  const { isLogged, user } = useLogin()
  const { t } = useTranslation()
  const isPremium = useIsPremium()
  const isLoading = useSelector(state => state.user.isLoading)
  const { highlights, notes, studies, tags } = useSelector(
    ({ user: { bible } }) => ({
      highlights: Object.keys(bible.highlights).length,
      notes: Object.keys(bible.notes).length,
      studies: Object.keys(bible.studies).length,
      tags: Object.keys(bible.tags).length,
    }),
    shallowEqual
  )
  const [currentVOD, setCurrentVOD] = useState(0)

  if (!isLogged) {
    return (
      <Container>
        <Box paddingHorizontal={25}>
          <Text marginTop={20} title fontSize={25} flex>
            {t('Bienvenue')}
          </Text>
          <Paragraph marginTop={20} marginBottom={20}>
            {t(
              'Connectez-vous pour profiter de toutes les fonctionnalités de la Bible Strong !'
            )}
          </Paragraph>
          <Button
            route="Login"
            rightIcon={
              <Icon.Feather
                name="arrow-right"
                size={20}
                color="white"
                style={{ marginLeft: 10 }}
              />
            }
          >
            {t('Je me connecte')}
          </Button>
        </Box>
        <Box grey>
          <RoundedCorner />
        </Box>
      </Container>
    )
  }

  return (
    <Container>
      <Box
        flex
        paddingHorizontal={20}
        overflow="visible"
        borderRadius={30}
        marginHorizontal={20}
        bg="reverse"
        py={20}
      >
        <OfflineNotice />

        <Box alignItems="center" row justifyContent="space-between">
          <Box overflow="visible" position="relative">
            <ProfileContainer>
              {user.photoURL ? (
                <ProfileImage source={{ uri: user.photoURL }} />
              ) : (
                <GenerateImage name={user.displayName} />
              )}

              {isLoading && (
                <Box
                  backgroundColor="rgba(255,255,255,0.8)"
                  center
                  style={StyleSheet.absoluteFillObject}
                >
                  <ActivityIndicator color="black" />
                </Box>
              )}
            </ProfileContainer>
            {isPremium && (
              <Box
                position="absolute"
                bottom={0}
                right={0}
                width={20}
                height={20}
                center
                bg="lightGrey"
                borderRadius={20}
                lightShadow
              >
                <MaterialIcon name="star" size={16} color="secondary" />
              </Box>
            )}
          </Box>
        </Box>
        <Spacer />
        <Box row alignItems="center" overflow="visible">
          <Box flex>
            <Text title fontSize={25}>
              {`${t('Bonjour')} ${extractFirstName(user.displayName)},`}
            </Text>
          </Box>
        </Box>
        <PreloadBible>
          {vodNb.map(i => (
            <VerseOfTheDay
              key={i}
              addDay={-i}
              isFirst={i === 0}
              isLast={i === [...Array(5).keys()].length - 1}
              currentVOD={-i === currentVOD}
              setCurrentVOD={setCurrentVOD}
            />
          ))}
        </PreloadBible>

        {/* {!user.emailVerified && (
          <Box marginTop={10}>
            <Text color="quart" mb={5}>
              {t(
                'Un email vous a été envoyé, merci de vérifier votre adresse. Si ce message persiste, reconnectez-vous.'
              )}
            </Text>
            <Link onPress={() => FireAuth.sendEmailVerification()}>
              <Text color="grey" style={{ textDecorationLine: 'underline' }}>
                {t('Renvoyer le lien')}
              </Text>
            </Link>
          </Box>
        )} */}
      </Box>
      <Box grey>
        <ScrollView
          horizontal
          style={{ maxHeight: 95, overflow: 'visible', marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 10,
            overflow: 'visible',
          }}
        >
          <Chip route="History" hightlighted>
            <MaterialIcon name="history" size={20} />
            <Text mt={5} fontSize={12}>
              {t('Historique')}
            </Text>
          </Chip>
          <Chip route="Highlights">
            <Box row>
              <ChipIcon name="edit-3" size={20} />
              <Text bold fontSize={20}>
                {highlights}
              </Text>
            </Box>
            <Text fontSize={12}>
              {t('surbrillance', { count: highlights })}
            </Text>
          </Chip>
          <Chip route="BibleVerseNotes">
            <Box row>
              <ChipIcon name="file-text" size={20} />
              <Text bold fontSize={20}>
                {notes}
              </Text>
            </Box>
            <Text fontSize={12}>{t('note', { count: notes })}</Text>
          </Chip>
          <Chip route="Studies">
            <Box row>
              <ChipIcon name="feather" size={20} />
              <Text bold fontSize={20}>
                {studies}
              </Text>
            </Box>
            <Text fontSize={12}>{t('étude', { count: studies })}</Text>
          </Chip>
          <Chip route="Tags">
            <Box row>
              <ChipIcon name="tag" size={20} />
              <Text bold fontSize={20}>
                {tags}
              </Text>
            </Box>
            <Text fontSize={12}> {t('étiquette', { count: tags })}</Text>
          </Chip>
        </ScrollView>
      </Box>
    </Container>
  )
}

export default memo(UserWidget)
