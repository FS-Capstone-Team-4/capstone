const { Sequelize } = require('sequelize');
const conn = require('../conn');
const { STRING, DATEONLY, UUID, UUIDV4 } = conn.Sequelize;

const CongressMember = conn.define('congressmember', {
    id: {
        primaryKey: true,
        defaultValue: UUIDV4,
        type: UUID,
        allowNull:false
    },
    CongressId: {
        type: STRING,
        allowNull:false
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    party: {
        type: STRING,
        allowNull: false,
    },
    state: {
        type: STRING,
    },
    position: {
        type: STRING,
    },
    congress: {
        type: STRING,
        allowNull: false
    }
});

module.exports = CongressMember;