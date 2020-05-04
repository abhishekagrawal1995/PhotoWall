import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Photo extends Component {
    render() {
        return(
            <figure>
                <Link to={'/single/' + this.props.post.id}> 
                    <img className ='photo' src = {this.props.post.image_link} alt= {this.props.post.description}></img>
                </Link>
                <figcaption><p>{this.props.post.description}</p></figcaption>
                <div className = 'buttonContainer'>
                    <button  onClick = {() => {
                        console.log("removing")
                        this.props.removingPosts(this.props.post.id)
                        this.props.history.push('/')
                        console.log(this.props)
                    }}> Remove </button>

                <Link className='button' to={'/single/' + this.props.post.id}>
                    <div className = 'comment-count'>
                        <div className = 'speech-bubble'></div>
                        {(this.props.comments[this.props.post.id] || []).length}
                    </div>
                </Link>
                </div>
            </figure>
        )
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onremove: PropTypes.func
}

export default Photo