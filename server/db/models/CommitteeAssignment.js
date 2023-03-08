const conn = require('../conn');
const { UUID, UUIDV4 } = conn.Sequelize;

const CommitteeAssignment = conn.define('committeeAssignment', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    }
});

module.exports = CommitteeAssignment;