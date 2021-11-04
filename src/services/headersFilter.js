export default function headersFilter(data, param) {
  const allHeaders = (Object.keys(data[0]));
  const headers = allHeaders.filter((head) => head !== param);
  return headers;
}
