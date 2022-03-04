const commissionForJuridicalInCheckOut = (amount) => {
    let out = amount * 0.3 / 100;

    if (out < 0.5)
        out = 0.5;

    return out;
};

module.exports = commissionForJuridicalInCheckOut;