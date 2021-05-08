import React from 'react'
import PostListItem from './PostListItem'

const PostList = props => (
    <div className="list-group">
        {
            props.posts.map(post => (
                        <React.Fragment key={post.id}>
                            <PostListItem onLike={props.onLike} 
                                          onDontLike={props.onDontLike} 
                                          post={post} />
                                    <br/>
                        </React.Fragment>)
                                )
        }
        </div>
)

export default PostList
