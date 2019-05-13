import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import StudentProfile from "./Components/StudentProfile";
import HomeStudentDisplay from "./Components/HomeStudentDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      students: [],
      name: "",
      course: "",
      location: ""
    };
  }

  componentDidMount() {
    axios.get("/api/students").then(res => {
      this.setState({ students: res.data });
    });
  }

  handleUpdateChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    let body = {
      id: this.state.students.length,
      name: this.state.name,
      course: this.state.course,
      location: this.state.location
    };
    axios.post("/api/students", body).then(res => {
      this.setState({ students: res.data });
    });
  };

  removeStudent = id => {
    axios.delete(`/api/students/${id}`).then(res => {
      this.setState({ students: res.data });
    });
  };

  editStudent = (id, name, course, location) => {
    let body = {
      name: name,
      course: course,
      location: location
    };
    axios.put(`/api/students/${id}`, body).then(res => {
      this.setState({ students: res.data });
    });
  };

  render() {
    console.log(this.state);
    let displayStudents = this.state.students.map(student => {
      return (
        <div classname="content-container" key={student.id}>
          <div className="student-box">
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>Location: {student.name}</p>
          </div>
          {/* <div>Name: {student.name}</div>
            <div>Course: {student.course}</div>
            <div>Name: {student.name}</div> */}
        </div>
      );
    });

    let displayHomePage = (
      <div className="home-content">
        <div>
          <h3>Students</h3>
          {displayStudents}
        </div>
      </div>
    );

    let displayAddStudent = (
      <div className="student-content">
        <h2>Add Student</h2>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Name"
        />
        <input
          onChange={e => this.setState({ course: e.target.value })}
          placeholder="Course"
        />
        <input
          onChange={e => this.setState({ location: e.target.value })}
          placeholder="Location"
        />
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );

    let displayProfile = (
      <div className="profile-content">
        <h2>Student Profile</h2>
        <HomeStudentDisplay
          handleUpdateChange={this.handleUpdateChange}
          students={this.state.students}
          removeStudent={this.removeStudent}
          editStudent={this.editStudent}
        />
      </div>
    );

    return (
      <div className="container">
        <div className="header clearfix">
          <div className="header-gif">
            <h1 className="header">Student Directory</h1>
            <img
              className="gifs"
              src="https://media.giphy.com/media/7JEPMRdfPLfq1sjZUJ/giphy.gif"
              alt="student-log"
            />
          </div>

          <nav>
            <button onClick={() => this.setState({ currentPage: "Home" })}>
              Home
            </button>
            <button
              onClick={() => this.setState({ currentPage: "Add Student" })}
            >
              Add Student
            </button>
            <button onClick={() => this.setState({ currentPage: "Profile" })}>
              Profile
            </button>
            {/* </ul> */}
          </nav>
        </div>
        {this.state.currentPage === "Home" && displayHomePage}
        {this.state.currentPage === "Add Student" && displayAddStudent}
        {this.state.currentPage === "Profile" && displayProfile}
        <div id="app" className="jumbotron" />

        <footer className="footer" />
      </div>
    );
  }
}

export default App;
