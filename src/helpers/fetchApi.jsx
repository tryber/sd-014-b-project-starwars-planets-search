export default async function fetchApi(url) {
  const res = await (await fetch(url)).json();
  return res;
}
