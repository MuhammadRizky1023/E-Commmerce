const { Router } = require('express');
const { register, login } = require('../Controllers/UserAuth');

const router = Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;