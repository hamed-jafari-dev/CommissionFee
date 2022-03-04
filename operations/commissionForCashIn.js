const commissionForCashIn = (amount) =>{
    let out = (amount * 0.03) / 100;

    if (out > 5)
        out = 5;

    return out;
};

module.exports = commissionForCashIn;