import Translation from "../entities/Translation";

export default async function translateText(text, from, to, apiService) {
  const result = await apiService(text, from, to);

  return new Translation(text, from, to, result);
}