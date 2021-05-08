import React, { Component } from 'react'

class PostListItem extends Component {
    render() {
        const { post, onLike, onDontLike } = this.props
        return (
            <div>
                <article className={this.getStyleClasses()}>
                    <h2> {post.title} </h2>
                    <p>
                        {post.content}
                        <span className="pull-right">by {post.author}</span>
                    </p>
                    <button className="btn btn-success" onClick={() => onLike(post)}><i className="fa fa-heart"></i> Love Its</button> &nbsp;
                    <button className="btn btn-danger" onClick={() => onDontLike(post)}><i className="fa fa-heartbeat"></i> Dont Love Its</button>
                </article>
            </div>
        )
    }

    getStyleClasses() {
        const { post } = this.props
        let classes = 'list-group-item'
        if(post.loveIts > post.dontLoveIts)
            classes+=' list-group-item-success'
        else if(post.loveIts < post.dontLoveIts)
            classes+=' list-group-item-danger'
        return classes
    }
}

export default PostListItem