import React from 'react'
import "./textInput.css"

function TextInput({value,onChange}) {
  return (
    <div className="text-container">
      <textarea 
        className="text-input"
        placeholder="Enter text to translate..."
         value={value}
      onChange={onChange}
      rows="4"
      ></textarea>
    </div>
  )
}

export default React.memo(TextInput)