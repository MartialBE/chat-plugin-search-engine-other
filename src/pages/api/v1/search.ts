import {
  PluginErrorType,
  createErrorResponse,
  getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';

import Search from '@/services/search';
import { SearchResults, Settings } from '@/type';

const KEY = process.env.SECRET_KEY;

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const settings = getPluginSettingsFromRequest<Settings>(req);
  if (!settings)
    return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Invalid search engine type.',
    });

  if (settings.SECRET_KEY !== KEY) {
    return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Invalid secret key.',
    });
  }

  try {
    const args = await req.json();

    const searchResults: SearchResults = await Search(args, settings);

    return new Response(JSON.stringify(searchResults));
  } catch (error) {
    return createErrorResponse(PluginErrorType.PluginServerError, error as object);
  }
};
