const soma = require('../src/index');

describe('Soma', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(soma(1, 2)).toBe(3);
	});

	test('adds 3 + 2 to equal 5', () => {
		expect(soma(3, 2)).toBe(5);
	});
})
