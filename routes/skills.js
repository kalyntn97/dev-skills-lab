import { Router } from 'express'
// import the Skill data
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)

export { router }
