let students = [
    {
      id: 1,
      name: "Jerry Broomstick",
      course: "iOS",
      location: "Lehi",
    },
    {
      id: 2,
      name: "Hamadi the Great",
      course: "iOS",
      location: "Lehi",
    }
]


module.exports = {
  getStudents: (req, res) => {
    res.status(200).send(students);
  },

  createStudent: (req, res) => {
    let { id, name, course, location } = req.body;
    id = id + 1;
    let newStudent = {
      id: id,
      name: name,
      course: course,
      location: location
    };
    students.push(newStudent);
    res.status(200).send(students);
  },

  updateStudent: (req, res) => {
    let updateID = req.params.id;
    let updateIndex = students.findIndex(students => {
      students.id == updateID;
    });
    let studentToUpdate = students[updateIndex];
    students[updateIndex] = {
      id: studentToUpdate,
      name: studentToUpdate.name,
      course: studentToUpdate.course,
      location: studentToUpdate.location
    };
    res.status(200).send(students);
  },

  removeStudent: (req, res) => {
    let studentToDelete = req.params.id;
    let studentIndex =
      students.findIndex(student => student.id) === studentToDelete;
    students.splice(studentIndex, 1);
    res.status(200).send(students);
  }
};
