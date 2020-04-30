const { Router } = require('express');

const router = Router();

router.route('/')
    .get((_, res) => res.send());

module.exports = router;
