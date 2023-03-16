const conn = require('../conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Vote = conn.define('vote', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    yeaOrNay: {
        type: STRING,
        validate: {
            isIn: [['yea', 'nay']],
        }
    }
});

module.exports = Vote;