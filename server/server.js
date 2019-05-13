const express = require('express');

const studentsController = require('./Controller/studentsController')
const app = express();

app.use(express.json());

const studentBaseURL = '/api/students';
app.post(studentBaseURL, studentsController.createStudent);
app.get(studentBaseURL, studentsController.getStudents);
app.put('/api/students/:id', studentsController.updateStudent);
app.delete (`/api/students/:id`, studentsController.removeStudent);


const port = 3001;
app.listen(3001, () =>{
    console.log(`Server listening on port ${3001}`);
})





