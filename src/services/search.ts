import { Settings } from '@/type';

import { BaiduSearch } from './baidu_search';
import { DuckduckgoSearch } from './duckduckgo_search';
import { GoogleSearch } from './google_search';

export const searchEngines = {
  baidu: BaiduSearch,
  duckduckgo: DuckduckgoSearch,
  google: GoogleSearch,
};

export default async function Search(args: { query: string }, settings: Settings) {
  if (!(settings.SEARCH_ENGINE_TYPE in searchEngines)) {
    throw new Error(`Invalid search engine type: ${settings.SEARCH_ENGINE_TYPE}`);
  }

  const searchFunction = searchEngines[settings.SEARCH_ENGINE_TYPE];
  const searchResults = await searchFunction(args.query, 5);

  return searchResults;
}
