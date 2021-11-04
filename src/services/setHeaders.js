import headersFilter from './headersFilter';

export const filteredCharact = 'residents';

export function setHeaders(dataFromContext, setState) {
  const characts = headersFilter(dataFromContext, filteredCharact);

  for (let i = 0; i < characts.length; i += 1) { // adaptado de https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
    characts[i] = characts[i].replace('_', ' ');
  }

  for (let i = 0; i < characts.length; i += 1) { // adaptado de https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    characts[i] = characts[i]
      .charAt(0).toUpperCase() + characts[i].slice(1);
    setState(characts);
  }
}
