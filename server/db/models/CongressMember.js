const conn = require('../conn');
const { STRING, DATEONLY, UUID, UUIDV4 } = conn.Sequelize;

const CongressMember = conn.define('congressmember', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    party: {
        type: STRING,
        allowNull: false,
        validate: {
            isIn: [['democrat', 'republican', 'other']],
        }
    },
    position: {
        type: STRING,
        allowNull: false
    },
    electedOn: {
        type: DATEONLY
    }
});

module.exports = CongressMember;