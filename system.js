const commissionForCashIn = require('./operations/commissionForCashIn');
const commissionForNaturalInCheckOut = require('./operations/commissionForNaturalInCheckOut');
const commissionForJuridicalInCheckOut = require('./operations/commissionForJuridicalInCheckOut');
const readJsonFile = require('./operations/readJsonFile');
const roundFee = require('./operations/roundFee');

const inputs = readJsonFile("input");

let x = 0;
inputs.forEach(item => {
    let out = 0;

    const amount = item.operation.amount;

    switch (item.type) {
        case "cash_in":

            out = commissionForCashIn(amount);

            break;
        case "cash_out":
            if (item.user_type === "natural") {
                out = commissionForNaturalInCheckOut(amount, item);
            }
            if (item.user_type === "juridical") {
                out = commissionForJuridicalInCheckOut(amount);
            }
            break;
    }

    console.log(roundFee(out, -2));


    x++;
});