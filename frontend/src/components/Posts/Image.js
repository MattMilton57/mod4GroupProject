import React, { Component } from 'react'
import Likes from './Likes'
import { api } from '../../services/api'



export default class Image extends Component {

    state = {
        liked: false,
        likers: {}
    }

    componentDidMount(){
        const {post_id} = this.props 
        // api.posts.getLikers(post_id).then(res=> this.setState({likers: res}))
    }

    renderDate = () => {
        const {created_at} = this.props 
        let date = new Date(created_at).toLocaleDateString('en-GB', {  
            day : 'numeric',
            month : 'short',
            year : 'numeric'
        })
        return date 
    }


    

    render() {
        const {img_url, caption, created_at, likes, post_id, liker_id} = this.props
        return (
            <div className="image">
                <img onClick={this.props.handleClick} className="card-img-top"  style={{width: this.props.size, height: this.props.size}} src={img_url} />
                <br/>
                {/* {img_url && <Likes likes={likes} post_id={post_id} liker_id={liker_id} type={"Post"}/>} */}
                
                <div className="card-body">
                {caption}
                <br/>
                {this.renderDate()}
                </div>

            </div>
        )
    }
}
