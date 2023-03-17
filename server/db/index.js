// const conn = require('./models/conn');
const Bill = require('./models/Bill');
const BillCategorization = require('./models/BillCategorization');
const BillSponsorship = require('./models/BillSponsorship');
const Category = require('./models/Category');
const Committee = require('./models/Committee');
const CommitteeAssignment = require('./models/CommitteeAssignment');
const Vote = require('./models/Vote');
const CongressMember = require('./models/CongressMember');

BillCategorization.belongsTo(Bill);
Bill.hasMany(BillCategorization);
BillSponsorship.belongsTo(Bill);
Bill.hasMany(BillSponsorship);
Vote.belongsTo(Bill);
Bill.hasMany(Vote);

Vote.belongsTo(CongressMember);
CongressMember.hasMany(Vote);
CommitteeAssignment.belongsTo(CongressMember);
CongressMember.hasMany(CommitteeAssignment);
BillSponsorship.belongsTo(CongressMember);
CongressMember.hasMany(BillSponsorship);

CommitteeAssignment.belongsTo(Committee);
Committee.hasMany(CommitteeAssignment);
BillCategorization.belongsTo(Category);
Category.hasMany(BillCategorization);

module.exports = {
    models: {
        CongressMember
    }
}