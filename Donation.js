const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  donorName: String,
  donorEmail: String,
  amount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['success', 'failed'], default: 'success' }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
