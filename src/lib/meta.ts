export function toMetaDescription(text: string, maxLength = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;

  const candidate = clean.slice(0, maxLength + 1);
  const sentenceEnd = candidate.lastIndexOf(". ");
  if (sentenceEnd >= 95) return candidate.slice(0, sentenceEnd + 1);

  const wordEnd = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, wordEnd > 0 ? wordEnd : maxLength - 1)}…`;
}
