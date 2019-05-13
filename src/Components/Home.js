// import React, { Component } from "react";
// // import AddStudents from "./AddStudent";
// import axios from "axios";
// // import './App.css';

import React, {Component} from 'react';

class Home extends Component {
    render(){
        return(
            <div className="row">
                <div className='logo'>
                    <img src={'/Users/melodyvincent/Desktop/dev-mountain-logo.png'} width="100" height="50" />
                </div>

            </div>
        )
            
        
    }
}


// class ShowProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         posts: [
//             {
//               id: 1,
//               name: "Jerry Broomstick",
//               course: "iOS",
//               location: "Lehi",
//             }
//         ]
//     };
//   }
//   componentDidMount() {
//     let self = this;

//     axios
//       .post("/api/students", {})
//       .then(function(response) {
//         self.setState({ post: response.data });
//       })
//       .catch(function(error) {
//         console.log("error is ", error);
//       });
//   }

//   render() {
//     return (
//       <div className="list-group">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.posts.map(function(post, index) {
//                 return (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{post.name}</td>
//                     <td>{post.course}</td>
//                     <td>{post.location}</td>
//                     <td>
//                         <button>
//                             <i class="fas fa-pencil-alt"></i>
//                         </button>
//                         <button>
//                         <i class="fas fa-trash-alt"></i>
//                         </button>
//                     </td>
//                   </tr>
//                 );
//               }.bind(this)
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }


export default Home;




  // componentDidMount() {
  //   let self = this;

  //   axios
  //     .post("/api/students", {})
  //     .then(function(response) {
  //       self.setState({ post: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log("error is ", error);
  //     });
  // }



  //     constructor(props){
//         super(props);
//         this.state ={
//           post:[]
//         //       name:"",
//         //       course:"",
//         //       location:"",
//         //   }
//         };
//     }

//     componentDidMount(){
//         let self = this;

//         axios.get('/api/students', {

//         })
//         .then(function (res){
//             self.setState({list:res.data})
//         })
//         .catch(function (err){
//             console.log('error is', err);
//         });
//         document.getElementById('homeHyperlink').className = 'active';
//         document.getElementById('addHyperLink').className = "";
//     }

//     render(){
//         return(
//          <div className="list-group">
//             this.state.ShowList.map(function (list, index){

//             })

//         return <a href='#' className="list-group-item-active">
//                 <h4 className="list-group-item-heading">{post.name}</h4>
//                 <p className="list-group-item-text">Test</p>

//                 <h4 className="list-group-item-heading">{post.course}</h4>
//                 <p className="list-group-item-text">Test</p>

//                 <h4 className="list-group-item-heading">{post.location}</h4>
//                 <p className="list-group-item-text">Test</p>
//             </a>
//             <a href="#" className="list-group-item">
//                 <h4 className="list-group-item-heading">List group item heading</h4>
//                 <p className="list-group-item-text">Test</p>
//             </a>

//          </div>
//         )
//     }
// }



//     id: 1,
//     name: "Hamadi",
//     course: "QA Automation",
//     location: "Lehi"
//   },
//   {
//     id: 2,
//     name: "Sherlock",
//     course: "Full Stack",
//     location: "Dallas"
//   }
// ];
// let currentId = 2;