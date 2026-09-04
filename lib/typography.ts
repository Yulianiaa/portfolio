const GLUE_WORDS = new Set([
  "а", "б", "в", "и", "к", "о", "с", "у", "я",
  "во", "да", "до", "ее", "её", "же", "за", "из", "ко", "ли", "на", "не", "ни", "но", "об", "от", "по", "со", "то", "уж",
  "без", "для", "или", "как", "над", "под", "при", "про", "что", "чем", "эта", "это", "эти",
]);

const NBSP = "\u00A0";

/**
 * Joins short prepositions/conjunctions to the following word with a
 * non-breaking space so they never end up as the last thing on a line
 * (matches the "висячие предлоги" rule already applied in the Figma text).
 *
 * Tokenizes on whitespace runs instead of a single regex pass, so that
 * two glue words in a row (e.g. "а в") each get handled independently.
 */
export function nbsp(text: string): string {
  const tokens = text.split(/(\s+)/);
  for (let i = 0; i < tokens.length - 1; i += 2) {
    const bare = tokens[i].replace(/^[«"'(]+/, "").replace(/[,.:;!?»"')]+$/, "");
    if (GLUE_WORDS.has(bare.toLowerCase())) {
      tokens[i + 1] = NBSP;
    }
  }
  return tokens.join("");
}
