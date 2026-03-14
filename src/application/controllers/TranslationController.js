import Translation from "../../domine/entities/Translation";
import { translationAPI } from "../../infrastructure/service/translationAPI";

export async function handleTranslation(dispatch, text, from, to) {
  try {
    dispatch({ type: "LOADING" });

    const resultText = await translationAPI(text, from, to);

    dispatch({ type: "SUCCESS", payload: resultText });
    return new Translation(text, from, to, resultText);
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.message });
  }
}