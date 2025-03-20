const router = require('express').Router();
const coinPaprikaController = require('../controllers/coinPaprika/coinPaprikaMethods')

router.get("/coin/list", coinPaprikaController.getCoinsList)
router.get("/coin/:id", coinPaprikaController.getCoin)

module.exports = router