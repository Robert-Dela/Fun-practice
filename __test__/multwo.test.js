const multwo = require('../components/multwo')
describe('Testing a simple function', () =>{ 
    test('Testing multiply number ', () => {
        const result = multwo(5,2);
        expect(result).toBe(10);
    })
})