import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from 'components/Logo'

export const wrapperSizes = {
  normal: {
    width: '11rem',
    height: '3.3rem'
  },
  large: {
    width: '20rem',
    height: '5.9rem'
  },
  hideOnMobile: {
    width: '5.8rem',
    height: '4.5rem'
  }
}

const wrapperModifiers = {
  normal: () => css`
    width: ${wrapperSizes.normal.width};
    height: ${wrapperSizes.normal.height};
  `,
  large: () => css`
    width: ${wrapperSizes.large.width};
    height: ${wrapperSizes.large.height};
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: ${wrapperSizes.hideOnMobile.width};
      height: ${wrapperSizes.hideOnMobile.height};

      svg {
        pointer-events: none;
        height: ${wrapperSizes.hideOnMobile.height};
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile()};
  `}
`
