import React from 'react'
import LanguageSelect from '../component/languageSelect/LanguageSelect'
import TextInput from '../component/textInput/TextInput'
import ResultBox from '../component/resultBox/ResultBox'
import TranslateBt from '../component/translateBt/TranslateBt'
import "./translatorPage.css"

function TranslatorPage() {
  return (
    <div className="translator-page">

    <h1 className="translator-heading">Text Translator</h1>
    
      <div className="language-row">
        <LanguageSelect />
        <LanguageSelect />
      </div>

      <div className="content-row">
        <TextInput />
        <ResultBox />
      </div>

      <div className="button-row">
        <TranslateBt />
      </div>

    </div>
  )
}

export default TranslatorPage