const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('server is running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const courseNumber = course.find(c => c.category_id === id)
    res.send(courseNumber)
})

app.get('/allCourse', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log(`web app server running on port ${port}`)
  })