import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from '../../App'

describe('testing with router', () => {
  const history = createMemoryHistory()

  it('should display register form as default', () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(screen.getByText(/register card form/i)).toBeInTheDocument()
  })

  it('test with navigation', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    //go to Menu page when click the hamburger icon
    const hamburger = getByTestId('hamburger');
    fireEvent.click(hamburger)
    expect(screen.getByText('Menu')).toBeInTheDocument()

    //back to register page when click back
    const backBtn = getByTestId('backBtn');
    fireEvent.click(backBtn)
    expect(screen.getByText('Register card form')).toBeInTheDocument()
  })
})