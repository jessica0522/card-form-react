import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react';
import Register from '../Register';

//mockup server
const server = setupServer(
  rest.get('/data.json', (req, res, ctx) => {
    return res(ctx.json({ FirstName: 'Tester', LastName: 'user' }))
  })
)

describe('Menu component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should display menu page title', () => {
    const { getByTestId } = render(
      <Router >
        <Register />
      </Router>
    )
    const context = getByTestId('pageTitle')
    expect(context.textContent).toBe('Register card form')
  })

  it('Snapshot match', () => {
    const { asFragment } = render(
      <Router >
        <Register />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should display loading when landing the page, then show user name after fetching user', async () => {
    const { queryByText, getByTestId, findByText } = render(
      <Router >
        <Register />
      </Router>
    )
    //display loading text
    expect(queryByText('Loading user...')).toBeInTheDocument()
    
    //after fetching user info, display user name
    await screen.findByTestId('welcomeText')
    expect(screen.queryByText('Welcome Tester user')).toBeInTheDocument()
  })
})

