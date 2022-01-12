import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from 'components/Logo'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import { wrapperSizes } from './styles'

describe('<Logo />', () => {
  it('should render the white logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render the black label when the color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: wrapperSizes.normal.width
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: wrapperSizes.large.width
    })
  })

  it('should render a bigger logo without text if is hideOnMobile', () => {
    renderWithTheme(<Logo size="large" hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      wrapperSizes.hideOnMobile.width,
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
