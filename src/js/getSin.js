export async function getSin(url = './src/js/sin.json') {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
