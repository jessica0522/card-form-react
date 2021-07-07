import React, { useState } from "react";

interface State {
  form: {
    card_number?: number
    cvc?: number
    expiry?: any
  },
  showErrorMessage: boolean
}

const Form = () => {
  //set form data state
  const [formData, setFormDate] = useState<State['form']>({
    card_number: undefined,
    cvc: undefined,
    expiry: undefined
  })

  //set state for if display error message
  const [showErrorMessage, setShowErrorMessage] = useState<State['showErrorMessage']>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
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
      && (isNaN(parseInt(formData.expiry)) && !isNaN(Date.parse(formData.expiry)))  // check if it's a valid date
    ) {
      console.log('Form data:', formData)
    }else {
      //when form is incompleted or format invalid, display error message
      setShowErrorMessage(true)
    }
  }

  return (
    <div className="form">
      <div className="form-number">
        <input 
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
          className="w-small" 
          type="number"
          name="cvc"
          value={formData.cvc || ''} 
          onChange={(e)=> { handleChange(e) }} 
          placeholder="CVC" 
        />
        <input 
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
          <p className="errorMessage">Please complete the form or check your input format.</p>
        </div>
      }
      <input 
        className="submit" 
        type="submit" 
        value="Submit" 
        onClick={(e)=>{ handleSubmit(e) }}
      />
    </div>
  )
}

export default Form