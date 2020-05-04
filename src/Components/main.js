import React, {Component} from 'react'
import Title from './title'
import Photowall from './photowall'

// const posts = [{
//         id: 0,
//         description: "Vacation",
//         image_link: "https://g.foolcdn.com/editorial/images/520744/vacation.jpg"
//     },
//     {
//         id: 1,
//         description: "Aliens",
//         image_link: "https://sm.mashable.com/mashable_in/photo/default/what-do-aliens-look-like_q14a.jpg"
//     },
//     {
//         id: 2,
//         description: "Code",
//         image_link: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
//     }

// ]

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.loadingPosts().then(() => {
            console.log("setting loading state false")
            this.setState({loading: false})
        })
        console.log("loading comments")
        this.props.loadingComments()
    }
    
    render() {
        console.log("Main function calling")
        return (
            <div>
            <Title title = 'Photowall'/>
            <Photowall {...this.props} loading={this.state.loading}/>
            </div>
        )
    }
}


export default Main