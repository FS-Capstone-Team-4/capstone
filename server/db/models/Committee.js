const conn = require('../conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Committee = conn.define('committee', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
    },
});

module.exports = Committee;