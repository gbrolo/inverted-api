import express from 'express'
import { invertText } from '../providers/invertions'
import { verifyPresentParams } from '../providers/paramChecker'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Invert-API' })
})

/* GET inverted string */
router.get('/iecho', function (req, res, next) {
  verifyPresentParams(
    ['text'], { ...req.query }
  )
    .then(() => {
      res.status(200).json(invertText(req.query.text))
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

export default router
