import styled from 'styled-components'

import { LogoProps } from 'components/Logo'

export const Wrapper = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`
