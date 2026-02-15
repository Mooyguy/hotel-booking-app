const express = require('express');
const router = express.Router();
const PageController = require('../controllers/pageController');

const pageController = new PageController();

router.get('/', pageController.renderHomePage);
router.get('/about', pageController.renderAboutPage);
router.get('/privacy', pageController.renderPrivacyPage);

module.exports = router;