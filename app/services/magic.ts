import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

let apiKey = 'pk_live_C51F07D7CC1ECF65';

export const magic = new Magic(apiKey, {
  extensions: [new OAuthExtension()],
});
