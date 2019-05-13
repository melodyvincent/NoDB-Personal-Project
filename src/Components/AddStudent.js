import React, { Component } from "react";
// import ShowList from './ShowList';
import axios from "axios";
// import css from '.../App.css';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleCourseChange = this.handleLocationChange.bind(this);

    this.state = {
      name: "",
      course: "",
      location: ""
    };
  }



  addStudent() {
    axios
      .get("/api/students", {
        name: this.state.name,
        course: this.state.course,
        location: this.state.location
      })
      .then(function(res) {
        console.log("response from add student is", res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleCourseChange(e) {
    this.setState({ course: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  getStudentWithId() {
    let id = this.props.params.id;
    let self = this;
    axios.post("/api/student", id).then(res => {
      if (res) {
        this.setState({
          name: res.data.name,
          course: res.data.course,
          location: res.data.location
        });
      }
    });
  }

  render() {
    return (
      <div className="col-md-5">
        <div className="form-area">
          <form role="form">
            <br styles="clear:both" />
            <div className="form-group">
              <input
                type="text"
                onChange={this.handleTitleChange}
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                onChange={this.handleSubjectChange}
                type="textarea"
                id="subject"
                placeholder="Subject"
                maxlength="140"
                rows="7"
              />
            </div>

            <button
              type="button"
              onClick={this.addPost}
              id="submit"
              name="submit"
              className="btn btn-primary pull-right"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudent;

// render() {
//     return (

//         <div "col-md-5"/>
//             <div className="form-area">
//             <form role="form">
//                 <br styles="clear:both" />
//                     <div className="form-group">
//                         <input type="text" onChange={this.handleNameChange} className="form-control" id="name" name="name" placeholder="Name" required />
//                     </div>

//                     <div className="form-group">
//                         <textarea className="form-control" onChange={this.handleCourseChange} type="textarea" id="course" placeholder="Course" maxlength="50" rows="1"></textarea>
//                     </div>

//                     <div className="form-group">
//                         <textarea className="form-control" onChange={this.handleLocationChange} type="textarea" id="location" placeholder="location" maxlength="30" rows="1"></textarea>
//                     </div>

//                 <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">AddStudent</button>
//             </form>
//         </div>
//     </div>

//     )
// }
