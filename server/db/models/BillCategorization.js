const conn = require('../conn');
const { UUID, UUIDV4 } = conn.Sequelize;

const BillCategorization = conn.define('billCategory', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    }
});

module.exports = BillCategorization;