import headersFilter from './headersFilter';

export const filteredCharact = 'residents';

export function setHeaders(dataFromContext, setState) {
  const headers = headersFilter(dataFromContext, filteredCharact);

  for (let i = 0; i < headers.length; i += 1) { // adaptado de https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
    headers[i] = headers[i].replace('_', ' ');
  }

  for (let i = 0; i < headers.length; i += 1) { // adaptado de https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    headers[i] = headers[i]
      .charAt(0).toUpperCase() + headers[i].slice(1);
    setState(headers);
  }
}
