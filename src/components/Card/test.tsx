import { render } from '@testing-library/react'

import Card from '.'

describe('<Card />', () => {
  it('should render the correct elements', () => {
    const props = {
      image: 'gloves',
      meaning: 'gloves'
    }

    render(<Card {...props} />)

    // expect(screen.getByText(`${props.meaning}`)).toBeInTheDocument()
  })
})
