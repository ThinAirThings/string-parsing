
export function removeReservedCharacters(str: string): string {
  // List of reserved characters to remove
  const reservedChars = ['<', '>', ':', '"', '/', '\\', '|', '?', '*', ' '];

  // Replace each reserved character with an empty string
  for (const char of reservedChars) {
    str = str.replace(new RegExp(`\\${char}`, 'g'), '');
  }

  return str;
}