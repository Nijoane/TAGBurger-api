const { Router } = require('express')
const UserController = require("../controller/UserController");

const router = Router();

router.post('/users', UserController.create);
router.get('/users', UserController.get);
router.get('/:id', UserController.byUid);
// router.put('/userUID', UserController.update)
// router.delete('/userUID', UserController.delete)

module.exports = router;
