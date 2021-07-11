import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../Welcome';

describe('Welcome component', () => {
  const user = {
    FirstName: 'Jess',
    LastName: 'Liu'
  }

  it('should display user full name', () => {
    const { getByTestId } = render(<Welcome user={user} />)
    const context = getByTestId('welcomeText')
    expect(context).toHaveTextContent('Welcome Jess Liu')
  })

  it('Snapshot match', () => {
    const {asFragment} = render(<Welcome user={user} />)
    expect(asFragment()).toMatchSnapshot()
}); 
})

