export function clearIdentForTesting(css: string, size = 6) {
  const regex = new RegExp(" ".repeat(size), "gm");
	return css.replace(regex, '').trim();
}

export function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};