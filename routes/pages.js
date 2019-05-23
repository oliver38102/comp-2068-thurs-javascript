const router = require('express').Router();

//our controllers
const PagesController = require('../controllers/PagesController')

//create our routes

router.get('/', PagesController.show)
router.get('/about', PagesController.show)
router.get('/contact', PagesController.show)

module.exports = router;
