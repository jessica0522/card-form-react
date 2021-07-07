import React, { useState } from "react";

interface FormState {
  card_number?: number
  cvc?: number
  expiry?: any
}

const Form = () => {
  //set form data state
  const [formData, setFormDate] = useState<FormState>({
    card_number: undefined,
    cvc: undefined,
    expiry: undefined
  })

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