const conn = require('../conn');
const { STRING, BOOLEAN, UUID, UUIDV4, TEXT } = conn.Sequelize;

const Bill = conn.define('bill', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    bill_id: {
        type: STRING,
    },
    short_title: {
        type: STRING
    },
    title: {
        type: TEXT,
    },
    sponsor_id: {
        type: STRING,
    },
    introduced_date: {
        type: STRING,
    },
    active: {
        type: BOOLEAN,
    },
    enacted: {
        type: STRING,
    },
    vetoed: {
        type: STRING,
    },
    last_vote: {
        type: STRING
    },
    latest_major_action: {
        type: STRING
    },
    latest_major_action_date: {
        type: STRING
    },
});

module.exports = Bill;