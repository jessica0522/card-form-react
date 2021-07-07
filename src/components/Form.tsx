import React from "react";

const Form = () => {
  return (
    <div className="form">
      <div className="form-number">
        <input className="w-100" type="text" placeholder="Credit card number" />
      </div>
      <div className="form-date">
        <input className="w-small" type="text" placeholder="CVC" />
        <input className="w-small" type="date" placeholder="Expiry" />
      </div>
      <input className="submit" type="submit" value="Submit" />
    </div>
  )
}

export default Form