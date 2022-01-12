import styled, { css } from 'styled-components'

import { LogoProps } from 'components/Logo'

export const wrapperSizes = {
  normal: {
    width: '11rem',
    height: '3.3rem'
  },
  large: {
    width: '20rem',
    height: '5.9rem'
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
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
  `}
`
