
export const fetchObj = async (url: string, setItem: Function, setErr: Function) => {
	const data = await fetch(url);
	const items = await data.json();
	setItem(items[0]);
	setErr(items);
  };