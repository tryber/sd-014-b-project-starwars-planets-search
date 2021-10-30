export default function (dataFromContext, setState) {
  const allHeaders = (Object.keys(dataFromContext[0]));
  const headers = allHeaders.filter((head) => head !== 'residents');

  const modifiedHeaders = headers;

  for (let i = 0; i < modifiedHeaders.length; i += 1) { // adaptado de https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
    modifiedHeaders[i] = modifiedHeaders[i].replace('_', ' ');
  }

  for (let i = 0; i < modifiedHeaders.length; i += 1) { // adaptado de https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    modifiedHeaders[i] = modifiedHeaders[i]
      .charAt(0).toUpperCase() + modifiedHeaders[i].slice(1);
    setState(modifiedHeaders);
  }
}
