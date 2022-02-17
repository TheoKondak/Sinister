export async function getSin(url = './src/sin.json') {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}