const router = require('express').Router();
const Donation = require('../models/Donation');
const Campaign = require('../models/Campaign');

router.post('/', async (req, res) => {
  try {
    const { campaignId, amount, donorName, donorEmail } = req.body;
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    const donation = await Donation.create({
      campaign: campaignId,
      amount,
      donorName,
      donorEmail,
      paymentStatus: 'success'
    });

    campaign.raisedAmount += amount;
    if (campaign.raisedAmount >= campaign.targetAmount) {
      campaign.status = 'completed';
    } else if (campaign.deadline < new Date()) {
      campaign.status = 'expired';
    }
    await campaign.save();

    res.status(201).json(donation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
