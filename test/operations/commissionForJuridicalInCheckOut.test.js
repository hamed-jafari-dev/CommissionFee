const commissionForJuridicalInCheckOut = require('../../operations/commissionForJuridicalInCheckOut');


test('commission For Juridical In CheckOut', () => {
    expect(commissionForJuridicalInCheckOut(300.00)).toBe(0.9);
});