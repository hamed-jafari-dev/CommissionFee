const commissionForCashIn = require('../../operations/commissionForCashIn');


test('commission For Juridical In CheckOut', () => {
    expect(commissionForCashIn(200.00)).toBe(0.06);
});