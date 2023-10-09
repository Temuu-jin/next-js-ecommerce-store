import secureJson from 'secure-json-parse';

export function parseJson(stringifiedJson: string): any | undefined {
  if (!stringifiedJson) return undefined;
  try {
    return secureJson(stringifiedJson);
  } catch {
    return undefined;
  }
}
