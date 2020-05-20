const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))
console.log(students)
router.get('/', (req, res) => res.send(students))
router.get('/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.id))
    res.send(selectedStudents)
})


module.exports = router