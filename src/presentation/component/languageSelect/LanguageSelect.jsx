import React from "react";
import "./languageSelect.css";
import languages from "./language";

function LanguageSelect({ value, onChange }) {
  return (
    <div className="language-container">
      <select
        className="language-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Language</option>

        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}

      </select>
    </div>
  );
}

export default LanguageSelect;