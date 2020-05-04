import React, {Component} from 'react';
import Photo from './photo'
import PropTypes from 'prop-types'
import AddPhoto from './addPhoto'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import SinglePhoto from './single'


class PhotoWall extends Component{

    constructor(props) {
        super(props)
        // this.state = {
        //     posts: this.props.posts
        // }
        // this.removePhoto = this.removePhoto.bind(this);
        // this.addPhoto = this.addPhoto.bind(this);
    }

    // removePhoto(postRemoved) {
    //     console.log(postRemoved.description)
    //     this.setState((state) => ({
    //         posts: state.posts.filter((post) => (post !== postRemoved))
    //     }))
    // }

    // addPhoto(addedPost) {
    //     console.log(addedPost);
    //     //addedPost.id = this.state.posts.length
    //     this.setState((state) => ({
    //         posts: state.posts.concat([addedPost])
    //     }))
    // }

    componentDidMount() {
        console.log("Mounting Done")
    }

    render(){
        console.log("rendering photowall")
        console.log(this.props.posts)
        return(
            <div>
            
            <Route exact path ='/' render = {() => (
                <div>
                    <Link className='addButton' to="/addPhoto"></Link>
                    <div className='photoWall'>
                        {this.props.posts.sort(function(post1, post2) {
                            return post2.id - post1.id;
                        }).map((post) => <Photo {...this.props} key={post.id} post = {post}/>)};
                    </div>
                </div>
                )}>
            </Route>

            <Route exact path='/addPhoto' render={({history}) => (
                <AddPhoto {...this.props} />
            )}>
            </Route> 

            <Route exact path='/single/:id' render={(params) => (
                <SinglePhoto {...this.props} {...params}/>
            )}>
            </Route>

            </div>
            
        )
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PhotoWall