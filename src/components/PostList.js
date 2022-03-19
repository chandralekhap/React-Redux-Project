import { Component } from "react";
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import UserHeader from './UserHeader'

class PostList extends Component{

    componentDidMount(){
        this.props.fetchPosts()
    }
    render(){
        console.log(this.props.post)
        return <div>{this.props.post.map((post)=>{
            return(
            <div className = 'item' key = {post.id}>
            <i className = 'large middle aligned icon user' />
            <div className = 'content'>
            <div className = 'description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div><UserHeader userId = {post.userId}/></div>
            </div>
            </div>
            </div>
            );
        })
    }</div>
    }
}

const mapStateToProps =(state)=>{

    return {
        post : state.post
    }
}
export default connect (mapStateToProps, {fetchPosts})(PostList);