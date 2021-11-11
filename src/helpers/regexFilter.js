function regexFilter(array, property, string) {
  const regex = new RegExp(`${string}`, 'gi');
  return array.filter((object) => object[property].match(regex));
}

export default regexFilter;
/*
  Função criada com o auxílio do tutorial presente nesse artigo:
  https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f
*/
