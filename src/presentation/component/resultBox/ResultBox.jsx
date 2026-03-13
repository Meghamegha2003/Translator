import React from 'react'
import "./resultBox.css"

function ResultBox() {
  return (
    <div className="result-container">
      <div className="result-box">
        <h1 className="result-title">Result</h1>
        <p className="result-text">Translated text will appear here...</p>
      </div>
    </div>
  )
}

export default ResultBox