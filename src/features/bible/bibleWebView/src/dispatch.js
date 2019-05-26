export const dispatch = (obj) => {
  window.postMessage(JSON.stringify(obj))
}

export const SEND_INITIAL_DATA = 'SEND_INITIAL_DATA'

export const NAVIGATE_TO_BIBLE_VERSE_DETAIL = 'NAVIGATE_TO_BIBLE_VERSE_DETAIL'
export const NAVIGATE_TO_VERSE_NOTES = 'NAVIGATE_TO_VERSE_NOTES'
export const TOGGLE_SELECTED_VERSE = 'TOGGLE_SELECTED_VERSE'
export const CONSOLE_LOG = 'CONSOLE_LOG'
