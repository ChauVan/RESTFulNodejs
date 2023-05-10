const express = require('express')
const router = express.Router()
const { getHomePage, postCreateUser, getCreateUser } = require('../controllers/homeController')


// router.get('/', (req, res) => {
//     // res.send('Hello World!')
//     res.render('sample.ejs')
// })

router.get('/', getHomePage)
router.post('/create-users', postCreateUser)
router.get('/create-users', getCreateUser)

module.exports = router;