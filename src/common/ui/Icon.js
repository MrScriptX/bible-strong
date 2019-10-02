import * as Icon from '@expo/vector-icons'
import styled from '@emotion/native'

export const FeatherIcon = styled(Icon.Feather)(({ theme, color }) => ({
  color: theme.colors[color] || theme.colors.default
}))