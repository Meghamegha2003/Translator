
export async function translationAPI(inputText, from, to) {
  if (!inputText) return "";

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}&langpair=${from}|${to}`
    );

    const data = await response.json();

    return data.responseData.translatedText;
  } catch (err) {
    console.error("Translation API error:", err);
    return "Translation failed";
  }
}