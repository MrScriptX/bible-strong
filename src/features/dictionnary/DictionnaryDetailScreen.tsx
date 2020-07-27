import React, { useEffect, useState } from 'react'
import { Share } from 'react-native'
import styled from '@emotion/native'
import * as Icon from '@expo/vector-icons'
import truncHTML from 'trunc-html'
import { useDispatch, useSelector } from 'react-redux'
import * as Sentry from '@sentry/react-native'

import Button from '~common/ui/Button'
import books from '~assets/bible_versions/books-desc'
import StylizedHTMLView from '~common/StylizedHTMLView'
import Back from '~common/Back'
import Link from '~common/Link'
import Container from '~common/ui/Container'
import Text from '~common/ui/Text'
import ScrollView from '~common/ui/ScrollView'
import Box from '~common/ui/Box'
import { MAX_WIDTH } from '~helpers/useDimensions'
import { setHistory } from '~redux/modules/user'

import waitForDatabase from '~common/waitForDictionnaireDB'
import loadDictionnaireItem from '~helpers/loadDictionnaireItem'
import Snackbar from '~common/SnackBar'
import MultipleTagsModal from '~common/MultipleTagsModal'
import TagList from '~common/TagList'

const FeatherIcon = styled(Icon.Feather)(({ theme }) => ({
  color: theme.colors.default,
}))

const TitleBorder = styled.View(({ theme }) => ({
  marginTop: 10,
  width: 35,
  height: 3,
  backgroundColor: theme.colors.secondary,
}))

const MAX_CHAR = 3000

const htmlsave = require('htmlsave')

const DictionnaryDetailScreen = ({ navigation }) => {
  const { word } = navigation.state.params || {}
  const dispatch = useDispatch()
  const [dictionnaireItem, setDictionnaireItem] = useState(null)
  const [canReadMore, setCanReadMore] = useState(false)
  const [multipleTagsItem, setMultipleTagsItem] = useState(false)
  const tags = useSelector(state => state.user.bible.words[word]?.tags)

  useEffect(() => {
    loadDictionnaireItem(word).then(result => {
      if (result.definition.length > 7000) {
        setCanReadMore(true)
      }

      setDictionnaireItem({
        ...result,
        definitionShort: htmlsave.truncate(result.definition, MAX_CHAR, {
          breakword: false,
        }),
      })

      dispatch(
        setHistory({
          word,
          type: 'word',
        })
      )
    })
  }, [dispatch, word])

  const openLink = (href, content, type) => {
    if (type === 'verse') {
      try {
        const sanitizedHref = href.replace(String.fromCharCode(160), ' ')
        const book = books.find(b => sanitizedHref.includes(b.Nom))
        const splittedHref = sanitizedHref
          .replace(String.fromCharCode(160), ' ')
          .split(/\b\s+(?!$)/)
        const [chapter, verse] = splittedHref[splittedHref.length - 1].split(
          '.'
        )
        navigation.navigate('BibleView', {
          isReadOnly: true,
          book,
          chapter: parseInt(chapter, 10),
          verse: parseInt(verse, 10),
        })
      } catch (e) {
        Snackbar.show('Impossible de charger ce mot.')
        Sentry.captureMessage(
          `Something went wrong with verse ${href} in ${word} ${e}`
        )
      }
    } else {
      navigation.navigate({
        routeName: 'DictionnaryDetail',
        params: { word: href },
        key: href,
      })
    }
  }

  const shareDefinition = () => {
    try {
      const message = `${word} \n\n${truncHTML(
        dictionnaireItem.definition,
        4000
      )
        .text.replace(/&#/g, '\\')
        .replace(/\\x([0-9A-F]+);/gi, function() {
          return String.fromCharCode(parseInt(arguments[1], 16))
        })} \n\nLa suite sur https://bible-strong.app`

      Share.share({ message })
    } catch (e) {
      Snackbar.show('Erreur lors du partage.')
      console.log(e)
      Sentry.captureException(e)
    }
  }

  const loadRemainingText = () => {
    setCanReadMore(false)
  }

  return (
    <Container>
      <Box
        padding={20}
        maxWidth={MAX_WIDTH}
        width="100%"
        marginLeft="auto"
        marginRight="auto"
      >
        <Box style={{ flexDirection: 'row' }}>
          <Back style={{ flex: 1 }}>
            <Text title fontSize={22} flex>
              {word}
            </Text>
          </Back>
          <Link
            onPress={() =>
              setMultipleTagsItem({
                id: word,
                title: word,
                entity: 'words',
              })
            }
          >
            <FeatherIcon
              style={{
                paddingTop: 10,
                paddingHorizontal: 5,
                marginRight: 10,
              }}
              name="tag"
              size={20}
            />
          </Link>
          <Link onPress={() => {}}>
            <FeatherIcon
              style={{ paddingTop: 10, paddingHorizontal: 5, marginRight: 10 }}
              name="share-2"
              size={20}
              onPress={shareDefinition}
            />
          </Link>
          <Back>
            <FeatherIcon
              style={{ paddingTop: 10, paddingHorizontal: 5 }}
              name="minimize-2"
              size={20}
            />
          </Back>
        </Box>

        <TitleBorder />
      </Box>
      <ScrollView style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {tags && (
          <Box marginBottom={10}>
            <TagList tags={tags} />
          </Box>
        )}
        {dictionnaireItem && dictionnaireItem.definition && (
          <StylizedHTMLView
            value={
              canReadMore
                ? dictionnaireItem.definitionShort.replace(/\n/gi, '')
                : dictionnaireItem.definition.replace(/\n/gi, '')
            }
            onLinkPress={openLink}
          />
        )}
        {canReadMore && (
          <Box center marginTop={20}>
            <Button onPress={loadRemainingText} style={{ width: 150 }}>
              Lire plus
            </Button>
          </Box>
        )}
      </ScrollView>
      <MultipleTagsModal
        multiple
        item={multipleTagsItem}
        onClosed={() => setMultipleTagsItem(false)}
      />
    </Container>
  )
}

export default waitForDatabase(DictionnaryDetailScreen)