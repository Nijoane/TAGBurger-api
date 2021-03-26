const { Router } = require('express')
const UserController = require("../controller/UserController");

const router = Router();

router.post('/users', UserController.create);
router.get('/users', UserController.get);
router.get('/:id', UserController.getbyUid);
router.put('/:id', UserController.userUpdate)
router.delete('/:id', UserController.userDelete)

module.exports = router;
