const express = require('express')

const router = express.Router()
const validator = require('../../middlewares/validator')
const { updateVp1BodySchema } = require('./stage_one_vp.schema')
const { updateProfile, getProfile, submitProfile, getAllProfiles } = require('./stage_one_vp.controllers')
const { auth } = require ('../../middlewares/auth')

router.put('/', auth, validator(updateVp1BodySchema), updateProfile )
router.post('/submit', auth, validator(updateVp1BodySchema), submitProfile )
router.get('/', auth, getProfile );
router.get('/all', getAllProfiles)

module.exports = router