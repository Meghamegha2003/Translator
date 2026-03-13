import React from 'react'
import "./languageSelect.css"

function LanguageSelect() {
  return (
    <div className="language-container">
      <select className="language-select">
        <option>Select Language</option>
        <option>English</option>
        <option>Malayalam</option>
        <option>Hindi</option>
        <option>Tamil</option>
      </select>
    </div>
  )
}

export default LanguageSelect