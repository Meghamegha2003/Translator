import React from 'react'
import "./translateBt.css"

function TranslateBt({onClick}) {
  return (
    <div className="button-container">
      <button className="translate-btn" onClick={onClick}>Translate</button>
    </div>
  )
}

export default TranslateBt