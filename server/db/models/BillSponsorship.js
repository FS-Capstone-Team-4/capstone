const conn = require('../conn');
const { UUID, UUIDV4 } = conn.Sequelize;

const BillSponsorship = conn.define('billSponsorship', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    }
});

module.exports = BillSponsorship;