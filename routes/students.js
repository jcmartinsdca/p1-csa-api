const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

//get /students
router.get('/', (req, res) => res.send(students))

//get /students/:id
router.get('/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.id))
    res.send(selectedStudents)
})
//get students?search
router.get('/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.name))
    res.send(selectedStudents)
})
//get /grade/:id
router.get('/grades/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.grade))
    res.send(selectedStudents)
})

//Post /grades
router.get('/grades/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.grade))
    res.send(selectedStudents)
})

//Post /register
router.get('/grades/:id', (req, res) => {
    const selectedStudents = students.find(students => students.id === Number(req.params.grade))
    res.send(selectedStudents)
})


module.exports = router