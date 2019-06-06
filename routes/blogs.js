const router = require('express').router();

const BlogsController = require('../controllers/blogsController');


//begin routes
router.get('/', BlogsController.index);
router.get('/new', BlogsController.new);
router.get('/:id', BlogsController.show);
router.get('/:id/edit', BlogsController.edit);
router.post('/', BlogsController.create);
router.post('/:id', BlogsController.update);
router.post('/:id/delete', BlogsController.destroy);


//end routes

module.exports = router;



