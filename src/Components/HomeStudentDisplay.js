import React, { Component } from "react";
import StudentDisplay from "./StudentDisplay";

class HomeStudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    return (
        <div className="container">
            <table className="table table-sriped">
                
          
          <tbody>
            {this.props.students.map((student, index) => {
              console.log(this);
              return (
                <StudentDisplay
                  student={student}
                  index={index}
                  removeStudent={this.props.removeStudent}
                  editStudent={this.props.editStudent}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomeStudentDisplay;
