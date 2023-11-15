'use server';

import * as cheerio from 'cheerio';
import { decode } from 'html-entities';
import { convert as htmlToText } from 'html-to-text';

import { SearchResults } from '../type';
import { getRandomUserAgent } from './ua_tools';

export async function GoogleSearch(input: string, maxResults: number): Promise<SearchResults> {
  const results: SearchResults = {
    noResults: true,
    results: [],
  };
  try {
    const headers = new Headers();
    headers.append('User-Agent', getRandomUserAgent());
    const resp = await fetch(
      `https://www.google.com/search?nfpr=1&pws=0&q=${encodeURIComponent(input)}`,
      {
        headers: headers,
      },
    );
    const respCheerio = cheerio.load(await resp.text());
    respCheerio('div.g').each((i, elem) => {
      const item = cheerio.load(elem);
      const linkElement = item('a');
      const url = (linkElement.attr('href') ?? '').trim();

      if (url !== '' && url !== '#' && !url.startsWith('/')) {
        const title = decode(item('h3').text());
        let description = htmlToText(item(`div[data-sncf~="1"]`).text().trim());

        if (description === '') {
          description = htmlToText(item(`div[data-sncf~="2"]`).text().trim());
        }

        results.results.push({
          description,
          title,
          url,
        });
      }
    });

    results.noResults = results.results.length === 0;

    if (!results.noResults) {
      results.results = results.results.slice(0, maxResults);
    }
  } catch (error) {
    throw new Error(`Search error: ${error}`);
  }

  return results;
}
