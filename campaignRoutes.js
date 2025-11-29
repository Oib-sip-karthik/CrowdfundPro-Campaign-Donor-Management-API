const router = require('express').Router();
const Campaign = require('../models/Campaign');
const { protect, adminOnly } = require('../middleware/auth');

// create campaign (admin)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const campaign = await Campaign.create({ ...req.body, owner: req.user.id });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all campaigns
router.get('/', async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};
  const campaigns = await Campaign.find(filter).sort('-createdAt');
  res.json(campaigns);
});

// campaign stats
router.get('/:id/stats', async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) return res.status(404).json({ message: 'Not found' });

  const percent = (campaign.raisedAmount / campaign.targetAmount) * 100;
  res.json({
    targetAmount: campaign.targetAmount,
    raisedAmount: campaign.raisedAmount,
    percentCompleted: Math.min(percent, 100)
  });
});

module.exports = router;
