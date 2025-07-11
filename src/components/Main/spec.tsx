import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be able to render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveClass('bg-background')
  })
})
