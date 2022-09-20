const tape = require('tape');
const { randomSplice } = require('./dist');

tape('should throw TypeError', t => {
	t.throws(() => randomSplice(null));
	t.throws(() => randomSplice({}));
	t.throws(() => randomSplice(undefined));
	t.throws(() => randomSplice(''));
	t.throws(() => randomSplice(1));
	t.end();
});

tape('should throw Error', t => {
	t.throws(() => randomSplice([]));
	t.end();
});

tape('should remove from array', t => {
	const tmp = ['Item', 'Test', 'Thing', 'Example'];

	while (tmp.length) {
		randomSplice(tmp);
	}

	t.equal(0, tmp.length);
	t.end();
});
