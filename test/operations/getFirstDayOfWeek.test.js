const getFirstDayOfWeek = require('../../operations/getFirstDayOfWeek');


test('Date of first day of week', () => {
    expect(getFirstDayOfWeek("2016-01-05")).toEqual(new Date("2016-01-04T00:00:00.000Z"));
});