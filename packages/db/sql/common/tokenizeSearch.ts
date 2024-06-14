import { PROPERTY_SEARCH_FIELDS } from "./const";

/**
 * Tokenize search query and put each tokend word to compare with a field
 * @param {object} param
 * @param {string} param.searchStr String to be tokenized for search
 * @param {string[]} param.fields Fields to be compared by the tokenized words
 * @returns
 */
export const tokenizeSearch = ({
  searchStr,
  fields = PROPERTY_SEARCH_FIELDS,
}: {
  searchStr: string;
  fields?: string[];
}) => {
  const terms = searchStr.split(/\s+/); // Split search term by whitespace
  const queryParts = [];

  // `(city ~* '${term}' OR address ~* '${term}' OR province ~* '${term}' OR zip ~* '${term}' OR country ~* '${term}')`
  terms.forEach((term) => {
    queryParts.push(
      `(${fields.map((field) => `${field} ~* '${term}'`).join(" OR ")})`
    );
  });

  // (city ~* 'cody' OR address ~* 'cody' OR province ~* 'cody' OR zip ~* 'cody' OR country ~* 'cody') OR
  // (city ~* '462' OR address ~* '462' OR province ~* '462' OR zip ~* '462' OR country ~* '462') OR
  // (city ~* 'burnaby' OR address ~* 'burnaby' OR province ~* 'burnaby' OR zip ~* 'burnaby' OR country ~* 'burnaby')
  return queryParts.join(" AND ");
};
