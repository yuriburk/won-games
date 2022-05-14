import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Breakpoint, MediaMatchProps } from './types'

const mediaModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export const Wrapper = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaModifiers.greaterThan(greaterThan)}
  `}
`
