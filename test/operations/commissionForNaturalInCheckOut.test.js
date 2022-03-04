const commissionForNaturalInCheckOut = require('../../operations/commissionForNaturalInCheckOut');

const item = { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } };

test('commission For Natural In CheckOut', () => {
    expect(commissionForNaturalInCheckOut(300.00,item)).toBe(0);
});