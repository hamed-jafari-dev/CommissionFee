const getFirstDayOfWeek = require('../operations/getFirstDayOfWeek');

const transactionsPerUserInAWeek = {};

const commissionForNaturalInCheckOut = (amount, item) => {
    let out = 0;
    const firstDayOfWeek = getFirstDayOfWeek(item.date);

    transactionsPerUserInAWeek[item.user_id] = transactionsPerUserInAWeek[item.user_id] || [];

    let week = transactionsPerUserInAWeek[item.user_id].find(x=>x.firstDayOfWeek.toString() === firstDayOfWeek.toString());

    if(week){
        week.total += amount;
    }else{
        week = {firstDayOfWeek, total: amount, payedFee: 0};
        transactionsPerUserInAWeek[item.user_id].push(week);
    }

    if(week.total > 1000){
        const extra = week.total - 1000;

        out = (extra * 0.3 / 100) - week.payedFee;
        week.payedFee += out;
    }else{
        out = 0;
    }

    return out;
};

module.exports = commissionForNaturalInCheckOut;