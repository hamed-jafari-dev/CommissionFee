const roundFee = require('../../operations/roundFee');


test('calculate Round Ceil', () => {
    expect(roundFee(0.0023,-2)).toBe(0.01);
});