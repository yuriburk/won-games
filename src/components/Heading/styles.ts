import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.8rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};

  ${media.greaterThan('medium')`
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  `}
  ${({ theme, lineLeft }) => lineLeft && wrapperModifiers.lineLeft(theme)}
  ${({ theme, lineBottom }) => lineBottom && wrapperModifiers.lineBottom(theme)}
`
