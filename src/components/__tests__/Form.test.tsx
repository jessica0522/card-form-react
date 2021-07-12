import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../Form';
import { debug } from 'console';

describe('Form component', () => {
  it('Snapshot match', () => {
    const {asFragment} = render(<Form />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('test with card number field', () => {
    const { getByTestId } = render(<Form />)
    const input_card_number = getByTestId('formCardNumber')

    expect(input_card_number).toBeInTheDocument()
    expect(input_card_number).toHaveAttribute('type', 'number')
    //value to be null when init
    expect(input_card_number).toHaveValue(null)

    //accept input a number
    fireEvent.change(input_card_number, {
      target: {
        value: 12345678
      }
    })
    expect(input_card_number).toHaveValue(12345678)

    //refuse input a string
    fireEvent.change(input_card_number, {
      target: {
        value: 'test card number'
      }
    })
    expect(input_card_number).toHaveValue(null)
  })

  it('test with card cvc field', () => {
    const { getByTestId } = render(<Form />)
    const input_card_cvc = getByTestId('formCVC')

    expect(input_card_cvc).toBeInTheDocument()
    expect(input_card_cvc).toHaveAttribute('type', 'number')
    //value to be null when init
    expect(input_card_cvc).toHaveValue(null)

    //accept input a number
    fireEvent.change(input_card_cvc, {
      target: {
        value: 123
      }
    })
    expect(input_card_cvc).toHaveValue(123)

    //refuse input a string
    fireEvent.change(input_card_cvc, {
      target: {
        value: 'test card cvc'
      }
    })
    expect(input_card_cvc).toHaveValue(null)
  })

  it('test with card expiry date field', () => {
    const { getByTestId } = render(<Form />)
    const input_card_expiry = getByTestId('formExpiry')

    expect(input_card_expiry).toBeInTheDocument()
    expect(input_card_expiry).toHaveAttribute('type', 'text')
    //value to be empty string when init
    expect(input_card_expiry).toHaveValue('')

    //accept input a number
    fireEvent.change(input_card_expiry, {
      target: {
        value: 123
      }
    })
    expect(input_card_expiry).toHaveValue('123')

    //accept input a string
    fireEvent.change(input_card_expiry, {
      target: {
        value: 'test card expiry'
      }
    })
    expect(input_card_expiry).toHaveValue('test card expiry')
  })

  it('test with validation before submit', () => {
    const { queryByText, getByTestId } = render(<Form />)
    const input_card_number = getByTestId('formCardNumber')
    const input_card_cvc = getByTestId('formCVC')
    const input_card_expiry = getByTestId('formExpiry')
    const input_submit = getByTestId('formSubmit')
    //input with valid values
    fireEvent.change(input_card_number, {
      target: {
        value: 12345678
      }
    })

    fireEvent.change(input_card_cvc, {
      target: {
        value: 123
      }
    })

    fireEvent.change(input_card_expiry, {
      target: {
        value: 20210620
      }
    })
    //except no error message
    fireEvent.click(input_submit)
    expect(queryByText('Please complete the form or check your input format.')).toBeNull()
    
    //input with empty card number
    fireEvent.change(input_card_number, {
      target: {
        value: null
      }
    })

    fireEvent.change(input_card_cvc, {
      target: {
        value: 456
      }
    })

    fireEvent.change(input_card_expiry, {
      target: {
        value: 20210920
      }
    })
    //except display error message
    fireEvent.click(input_submit)
    expect(getByTestId('errorMessage').textContent).toBe('Please complete the form or check your input format.')

    //input with empty card cvc
    fireEvent.change(input_card_number, {
      target: {
        value: 123456
      }
    })

    fireEvent.change(input_card_cvc, {
      target: {
        value: null
      }
    })

    fireEvent.change(input_card_expiry, {
      target: {
        value: 20210620
      }
    })
    //except display error message
    fireEvent.click(input_submit)
    expect(getByTestId('errorMessage').textContent).toBe('Please complete the form or check your input format.')
  
    //input with invalid expiry date
    fireEvent.change(input_card_number, {
      target: {
        value: 987654
      }
    })

    fireEvent.change(input_card_cvc, {
      target: {
        value: 789
      }
    })

    fireEvent.change(input_card_expiry, {
      target: {
        value: 'invalid date'
      }
    })
    //except display error message
    fireEvent.click(input_submit)
    expect(getByTestId('errorMessage').textContent).toBe('Please complete the form or check your input format.')
  
  })

})

