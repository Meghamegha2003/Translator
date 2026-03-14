import React from 'react'
import "./resultBox.css"

export default function ResultBox({ value, loading }) {
  if (loading) return <p>Translating...</p>;
  return (
    <div className="result-container">
      <div className="result-box">
        <h1 className="result-title">Result</h1>
        <p className="result-text">{value}</p>
      </div>
    </div>
  );
}