export function clearIdentForTesting(css: string, size = 6) {
  const regex = new RegExp(" ".repeat(size), "gm");
	return css.replace(regex, '').trim();
}