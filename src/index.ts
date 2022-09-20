export const randomSplice = <T extends unknown>(input: T[]): T => {
	if (!Array.isArray(input)) {
		throw new TypeError('Parameter 1 should be of type Array.');
	}

	const { length } = input;

	if (!length) {
		throw new Error('No items in the array.');
	}

	const randomIndex = Math.floor(Math.random() * length);

	return input.splice(randomIndex, 1)[0];
};

export default randomSplice;
