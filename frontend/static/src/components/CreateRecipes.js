import React, {Component} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class CreateRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            image: null,
            preview: null,
            is_public: true,
            recipe_type: "",
            prep_time: "",
            cook_time: "",
            cook_temp: 1,
            directions: "",
            recipes: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // <Form.Label>Recipe Type</Form.Label>
    // <Form.Control as="select">
    //     <option name="recipe_type" value={this.state.recipe_type} onChange={this.handleChange}>Breakfast</option>
    //     <option name="recipe_type" value={this.state.recipe_type} onChange={this.handleChange}>Lunch</option>
    //     <option name="recipe_type" value={this.state.recipe_type} onChange={this.handleChange}>Dinner</option>
    //     <option name="recipe_type" value={this.state.recipe_type} onChange={this.handleChange}>Dessert</option>
    // </Form.Control>

    handleChange(e){
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
        console.log({[name]: value})
    }

    handleImageChange(e){
        let file = e.target.files[0]
        // the way not using []
        this.setState({image: file});

        // optional visual for users
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({preview: reader.result});
        };

        // asynconios
        reader.readAsDataURL(file);

    }

    handleSubmit(e){
        e.preventDefault();

        let formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("image", this.state.image);


        axios.post("/api/v1/recipes/", formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        .then(res => {
            let recipes = [...this.state.recipes];
            recipes.push(res.data);

            this.setState({recipes: recipes, title: "", preview: null, image: null,});
        })
        .catch(error => {
            console.log(error)
        });
    }

    componentDidMount(){
        axios.get("/api/v1/recipes/")
        .then(res =>{
            this.setState({recipes: res.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        let recipes = this.state.recipes.map(recipe => (
            <li key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt=""/>
            </li>
        ))
        return(
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <label>Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </label>

                    <input type="file" name="image" onChange={this.handleImageChange}/>

                    <Form.Check type="checkbox" name="is_public" checked={this.state.is_public} onChange={this.handleChange} label="Public" />

                    <label>Prep Time
                    <input type="text" name="prep_time" value={this.state.prep_time} onChange={this.handleChange}/>
                    </label>

                    <label>Cook Time
                    <input type="text" name="cook_time" value={this.state.cook_time} onChange={this.handleChange}/>
                    </label>

                    <label>Cook Temp
                    <input type="number" name="cook_temp" value={this.state.cook_temp} onChange={this.handleChange}/>
                    </label>

                    <label>Directions
                    <input type="text" name="directions" value={this.state.directions} onChange={this.handleChange}/>
                    </label>


                    {this.state.image ? (
                        <img src={this.state.preview} alt="preview"/>
                    ) : (
                        null
                    )}

                    <button>Upload</button>
                </Form>
                <ul>{recipes}</ul>
            </React.Fragment>
        )
    }
}

export default CreateRecipes;
