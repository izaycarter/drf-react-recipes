// import React, {Component} from 'react';
// import axios from "axios";
// import './App.css';
//
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title:"",
//             image: null,
//             preview: null,
//             recipes: []
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleImageChange = this.handleImageChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(e){
//         // [] allows you to not hard code title
//         this.setState({[e.target.name]: e.target.value});
//     }
//
//     handleImageChange(e){
//         let file = e.target.files[0]
//         // the way not using []
//         this.setState({image: file});
//
//         // optional visual for users
//         let reader = new FileReader();
//
//         reader.onloadend = () => {
//             this.setState({preview: reader.result});
//         };
//
//         // asynconios
//         reader.readAsDataURL(file);
//
//     }
//
//     handleSubmit(e){
//         e.preventDefault();
//
//         let formData = new FormData();
//         formData.append("title", this.state.title);
//         formData.append("image", this.state.image);
//
//
//         axios.post("/api/v1/recipes/", formData, {
//             headers: {
//                 "content-type": "multipart/form-data"
//             }
//         })
//         .then(res => {
//             let recipes = [...this.state.recipes];
//             recipes.push(res.data);
//
//             this.setState({recipes: recipes, title: "", preview: null, image: null});
//         })
//         .catch(error => {
//             console.log(error)
//         });
//     }
//
//     componentDidMount(){
//         axios.get("/api/v1/recipes/")
//         .then(res =>{
//             this.setState({recipes: res.data});
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
//
//     render(){
//         let recipes = this.state.recipes.map(recipe => (
//             <li key={recipe.id}>
//                 <p>{recipe.title}</p>
//                 <img src={recipe.image} alt=""/>
//             </li>
//         ))
//         return(
//             <React.Fragment>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
//                     <input type="file" name="image" onChange={this.handleImageChange}/>
//
//                     {this.state.image ? (
//                         <img src={this.state.preview} alt="preview"/>
//                     ) : (
//                         null
//                     )}
//
//                     <button>Upload</button>
//                 </form>
//                 <ul>{recipes}</ul>
//             </React.Fragment>
//         )
//     }
// }
//
// export default App;
