import React, { useState } from "react";
import dayjs from 'dayjs'

interface State {
  form: {
    card_number?: number
    cvc?: number
    expiry?: any
  },
  showErrorMessage: boolean
}

const initForm = {
  card_number: undefined,
  cvc: undefined,
  expiry: undefined
}

const Form = () => {
  //set form data state
  const [formData, setFormDate] = useState<State['form']>(initForm)

  //set state for if display error message
  const [showErrorMessage, setShowErrorMessage] = useState<State['showErrorMessage']>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setShowErrorMessage(false)
    setFormDate({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>): void =>{
    //validate form data before sumbit
    e.preventDefault()
    
    if(formData.card_number 
      && !isNaN(formData.card_number)
      && formData.cvc
      && !isNaN(formData.cvc)
      && formData.expiry
      && dayjs(formData.expiry).isValid() // check if it's a valid date
    ) {
      //valid form input, submit form
      submitForm()  
    }else {
      console.log('Form data:', formData, dayjs(formData.expiry).isValid())
      //when form is incompleted or format invalid, display error message
      setShowErrorMessage(true)
    }
  }

  const submitForm = () => {
    console.log('Form data:', formData)
    setFormDate(initForm)
  }

  return (
    <div className="form">
      <div className="form-number">
        <input 
          data-testid="formCardNumber"
          className="w-100" 
          type="number" 
          name="card_number"
          placeholder="Credit card number"
          onChange={(e)=> { handleChange(e) }} 
          value={formData.card_number || ''} 
        />
      </div>
      <div className="form-date">
        <input 
          data-testid="formCVC"
          className="w-small" 
          type="number"
          name="cvc"
          value={formData.cvc || ''} 
          onChange={(e)=> { handleChange(e) }} 
          placeholder="CVC" 
        />
        <input 
          data-testid="formExpiry"
          className="w-small" 
          type="text" 
          name="expiry"
          value={formData.expiry || ''}
          onChange={(e)=> { handleChange(e) }}  
          placeholder="Expiry" 
        />
      </div>
     { 
        //display error message when validation not passed
        showErrorMessage &&
        <div>
          <p data-testid="errorMessage" className="errorMessage">Please complete the form or check your input format.</p>
        </div>
      }
      <input 
        data-testid="formSubmit"
        className="submit" 
        type="submit" 
        value="Submit" 
        onClick={(e)=>{ handleSubmit(e) }}
      />
    </div>
  )
}

export default Form