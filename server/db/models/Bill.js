const conn = require('../conn');
const { STRING, DATEONLY, UUID, UUIDV4 } = conn.Sequelize;

const Bill = conn.define('bill', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    passedOn: {
        type: DATEONLY
    },
    billSummary: {
        type: STRING,
    },
    yayMeans: {
        type: STRING,
    },
    nayMeans: {
        type: STRING,
    },
});

module.exports = Bill;