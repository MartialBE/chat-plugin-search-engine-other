import { searchEngines } from '@/services/search';

export interface Settings {
  SEARCH_ENGINE_TYPE: keyof typeof searchEngines;
  SECRET_KEY: string;
}

export interface SearchResults {
  noResults: boolean;
  /** The web results of the search. */
  results: SearchResult[];
}

export interface SearchResult {
  /**
   * The sanitized description of the result.
   * Bold tags will still be present in this string.
   */
  description: string;
  /** The title of the result. */
  title: string;
  /** The URL of the result. */
  url: string;
}
