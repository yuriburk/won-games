import { screen } from '@testing-library/react'

import Logo from 'components/Logo'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

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
})
