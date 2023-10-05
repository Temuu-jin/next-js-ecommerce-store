import secureJson from 'secure-json-parse';

export function parseJson(stringifiedJson) {
  if (!stringifiedJson) return undefined;
  try {
    return secureJson(stringifiedJson);
  } catch {
    return undefined;
  }
}
