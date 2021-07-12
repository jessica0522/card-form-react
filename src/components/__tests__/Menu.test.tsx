import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Menu from '../Menu';

describe('Menu component', () => {

  it('should display menu page title', () => {
    const { getByTestId } = render(
      <Router >
        <Menu />
      </Router>
    )
    const context = getByTestId('pageTitle')
    expect(context.textContent).toBe('Menu')
  })

  it('Snapshot match', () => {
    const { asFragment } = render(
      <Router >
        <Menu />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

