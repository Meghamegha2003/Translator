import React, { useCallback, useContext, useState } from "react";
import LanguageSelect from "../component/languageSelect/LanguageSelect";
import TextInput from "../component/textInput/TextInput";
import ResultBox from "../component/resultBox/ResultBox";
import TranslateBt from "../component/translateBt/TranslateBt";
import { handleTranslation } from "../../application/controllers/TranslationController";
import { TranslationContext } from "../context/TranslationContext";
import "./translatorPage.css";

function TranslatorPage() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("ml");

  const { state, dispatch } = useContext(TranslationContext);

  const handleTranslate = useCallback(async () => {
  if (!text.trim()) return;
  await handleTranslation(dispatch, text, from, to);
}, [dispatch, text, from, to]);


  return (
    <div className="translator-page">
      <h1 className="translator-heading">Text Translator</h1>

      <div className="language-row">
        <LanguageSelect value={from} onChange={setFrom} />
        <LanguageSelect value={to} onChange={setTo} />
      </div>

      <div className="content-row">
        <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        <ResultBox value={state.result} loading={state.loading} error={state.error} />
      </div>

      <div className="button-row">
        <TranslateBt onClick={handleTranslate} />
      </div>
    </div>
  );
}

export default TranslatorPage;