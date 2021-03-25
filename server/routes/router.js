const { Router } = require('express')
const UserController = require("../controller/UserController");

const router = Router();

router.post('/users', UserController.store);

module.exports = router;
