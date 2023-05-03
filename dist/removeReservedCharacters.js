"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeReservedCharacters = void 0;
function removeReservedCharacters(str) {
    // List of reserved characters to remove
    const reservedChars = ['<', '>', ':', '"', '/', '\\', '|', '?', '*'];
    // Replace each reserved character with an empty string
    for (const char of reservedChars) {
        str = str.replace(new RegExp(`\\${char}`, 'g'), '');
    }
    return str;
}
exports.removeReservedCharacters = removeReservedCharacters;
