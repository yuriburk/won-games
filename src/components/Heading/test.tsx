import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from 'components/Heading'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Title</Heading>)
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Title</Heading>)
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a heading with a line to left side', () => {
    renderWithTheme(<Heading lineLeft>Title</Heading>)
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      'border-left': `0.8rem solid ${theme.colors.secondary}`
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Title</Heading>)
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      { modifier: '::after' }
    )
  })
})
