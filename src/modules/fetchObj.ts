export const fetchObj = async (url: string, fn: Function) => {
  const data = await fetch(url);
  const items = await data.json();
  fn(items[0]);
};
