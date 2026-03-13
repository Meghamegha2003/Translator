import React from 'react'
import "./textInput.css"

function TextInput() {
  return (
    <div className="text-container">
      <textarea 
        className="text-input"
        placeholder="Enter text to translate..."
      ></textarea>
    </div>
  )
}

export default TextInput