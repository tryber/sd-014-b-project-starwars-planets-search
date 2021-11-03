function applyDataParsers(data, parsers = []) {
  return parsers.reduce(
    (parsedData, parser) => parser(parsedData),
    { ...data },
  );
}

export default applyDataParsers;
