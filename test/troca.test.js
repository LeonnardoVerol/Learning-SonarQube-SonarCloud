const troca = require ('../src/troca');

describe('Troca', () => {
	test.each`
	input     | expectedResult
	${[3,2]}  | ${[2,3]}
	${[5,4]}  | ${[4,5]}
	`('troca $input para $expectedResult', ({ input, expectedResult }) => {
		expect(troca(input)).toEqual(expectedResult)
	})
})
