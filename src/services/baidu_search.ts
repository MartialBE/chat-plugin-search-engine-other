'use server';

import * as cheerio from 'cheerio';
import { decode } from 'html-entities';
import { convert as htmlToText } from 'html-to-text';

import { SearchResults } from '../type';
import { getRandomUserAgent } from './ua_tools';

function filterResults(url: string, originalTitle: string, originalDescription: string) {
  const title = htmlToText(originalTitle.replace('', ''));
  const description = htmlToText(originalDescription.replace('', ''));

  if (url === '' || url === '#' || url.startsWith('/')) {
    return false;
  }

  if (title.endsWith('广告') || title.endsWith('百度文库')) {
    return false;
  }

  if (
    description.endsWith('广告') ||
    description.endsWith('张图片') ||
    description.endsWith('tieba.baidu.com/')
  ) {
    return false;
  }

  return { description, title, url };
}

export async function BaiduSearch(input: string, maxResults: number): Promise<SearchResults> {
  const results: SearchResults = {
    noResults: true,
    results: [],
  };

  try {
    const headers = new Headers();
    headers.append('User-Agent', getRandomUserAgent());
    const resp = await fetch(
      `https://www.baidu.com/s?f=8&ie=utf-8&wd=${encodeURIComponent(input)}`,
      {
        headers: headers,
      },
    );
    const respCheerio = cheerio.load(await resp.text());
    respCheerio('div.c-container.new-pmd').each((i, elem) => {
      const item = cheerio.load(elem);
      const linkElement = item('a');
      const url = (linkElement.attr('href') ?? '').trim();
      const title = decode(linkElement.text());
      const description = item.text().replace(title, '').trim();

      const result = filterResults(url, title, description);
      if (result) {
        results.results.push(result);
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
