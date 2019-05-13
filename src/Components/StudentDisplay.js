import React, { Component } from "react";
import StudentProfile from "./StudentDisplay";

class StudentDisplay extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      name: "",
      course: "",
      location: "",
      delete: false
    };
  }
  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };
  toggleDelete = () => {
    this.setState({
      delete: !this.state.delete
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  saveStudent = () => {
    const { name, course, location } = this.state;
    const { student, editStudent } = this.props;

    editStudent(student.id, name, course, location);
    this.toggleEdit();
  };

  render() {
    return (
      <div>
        {this.state.edit ? (
          <tr>
            <td>
              <input type="text" name="name" onChange={this.handleChange} />
            </td>
            <td>
              <input type="text" name="course" onChange={this.handleChange} />
            </td>
            <td>
              <input type="text" name="location" onChange={this.handleChange} />
              <button onClick={this.toggleEdit}>Cancel</button>
              <button onClick={this.saveStudent}>Save</button>
            </td>
          </tr>
        ) : (
          <tr>
            <td>{this.props.index + 1}</td>
            <td>{this.props.student.name}</td>
            <td>{this.props.student.course}</td>
            <td>{this.props.student.location}</td>
            <td>
              <button onClick={this.toggleEdit}>
                <i class="fas fa-pencil-alt" />
              </button>
              {this.state.delete ? (
                <div>
                  <confirm>
                    Are you sure you want to delete this student?
                  </confirm>

                  <button
                    onClick={() =>
                      this.props.removeStudent(this.props.student.id)
                    }
                  >
                    Yes
                  </button>
                  <button onClick={this.toggleDelete}>No</button>
                </div>
              ) : (
                <button onClick={this.toggleDelete}>
                  <i class="fas fa-trash-alt" />
                </button>
              )}
            </td>
          </tr>
        )}
      </div>
    );
  }
}

export default StudentDisplay;
