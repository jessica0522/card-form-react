import React from 'react';
import { render } from '@testing-library/react';
import MenuItem from '../MenuItem';

describe('MenuItem component', () => {
  const menu = {
    title: 'Menu1',
    path: '/menu1'
  }

  it('should display correct menu title', () => {
    const { getByTestId } = render(<MenuItem menu={menu} />)
    const context = getByTestId('menuTitle')
    expect(context.textContent).toBe('Menu1')
  })

  it('Snapshot match', () => {
    const {asFragment} = render(<MenuItem menu={menu} />)
    expect(asFragment()).toMatchSnapshot()
}); 
})

