import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("Add Photo Mounting Done")
    }

    handleSubmit(event) {
        event.preventDefault();
        const description = event.target.elements.description.value;
        const link = event.target.elements.link.value;
        const post = {
            id: Number(new Date()),
            image_link: link,
            description: description
        }
        if (link && description) {
            this.props.startAddingPost(post);
            this.props.history.push('/');
        }
    } 

    render() {
        return (
            <div>
                 <h1> Add Photo </h1>
                 <form className="addPhotoForm" onSubmit={this.handleSubmit}>
                     <label>Description:  </label>
                     <input type = "text" placeholder="Enter Description" name="description"></input><br></br>
                     <label>Photo Link:  </label>
                     <input type = "text" placeholder="Enter Link" name = "link"></input><br></br>
                     <button type= "submit">Post</button>
                 </form>
            </div>
           
        )
    }
}

export default AddPhoto;