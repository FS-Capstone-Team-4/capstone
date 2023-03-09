const conn = require('./conn');
const Bill = require('./Bill');
const BillCategorization = require('./BillCategorization');
const BillSponsorship = require('./BillSponsorship');
const Category = require('./Category');
const Committee = require('./Committee');
const CommitteeAssignment = require('./CommitteeAssignment');
const Vote = require('./Vote');
const CongressMember = require('./CongressMember');

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