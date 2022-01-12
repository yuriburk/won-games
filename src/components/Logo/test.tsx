import { render, screen } from '@testing-library/react'

import Logo from 'components/Logo'

describe('<Logo />', () => {
  it('should render the white logo by default', () => {
    const { container } = render(<Logo />)
  })
})
