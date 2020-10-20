export const randomSplice = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError('Parameter 1 should be of type Array');
	}

	const len = arr.length;

	if (!len) {
		throw new Error('No items in the array');
	}

	const randomIndex = Math.floor(Math.random() * len);

	return arr.splice(randomIndex, 1)[0];
};
