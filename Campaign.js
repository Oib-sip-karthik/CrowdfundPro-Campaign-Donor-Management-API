const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  targetAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  tags: [String],
  status: { type: String, enum: ['active', 'completed', 'expired'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
