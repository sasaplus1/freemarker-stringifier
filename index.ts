import type { IToken } from 'freemarker-parser/types/interface/Tokens';

export function stringifyToken(token: IToken): string {
  const { endTag, params, startTag, text, type } = token;

  let result = '';

  if (startTag) {
    result += startTag;
  }

  result += text;

  if (params) {
    result += type === 'Interpolation' ? params : ` ${params}`;
  }

  if (endTag) {
    result += type === 'Macro' && params === undefined ? ` ${endTag}` : endTag;
  }

  return result;
}

export function stringify(tokens: IToken[]): string {
  return tokens.map(stringifyToken).join('');
}
