import express from 'express'
import db from '../db.js'

const router = express.Router()


router.get('/', (req, res) => {})

// create new
router.post('/', (req, res) => {})

//update
router.put('/:id', (req, res) => {})

//delete
router.delete('/:id', (req, res) => {})


export default router