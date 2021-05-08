import React from 'react';
import PostList from './components/Blog/PostList'
import Post from './models/Post'
import NewPost from './components/Blog/NewPost'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        new Post(1, 'First Post', 'Sample', 'Test')
      ]
    }
  }

  addPost = post => {
    post.id = this.state.posts.length + 1
    this.setState(
      (prevState) => {
        return {
          posts: prevState.posts.concat(post) 
        }
      }
    )
  }

  removePost = post => {
    this.setState(
      (prevState) => {
        let previousPosts = prevState.posts.filter(p => p.id !== post.id)
        return {
          posts: previousPosts
        }
      }
    )
  }

  handleLike = post => {
    this.setState(
      prevState => {
        const posts = prevState.posts
        posts[post.id - 1].increaseLoveIts()
        return { posts }
      }
    )
  }

  handleDontLike = post => {
    this.setState(
      prevState => {
        const posts = prevState.posts
        posts[post.id - 1].increaseDontLoveIts()
        return { posts }
      }
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>All Posts</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PostList posts={this.state.posts}
                      onLike={this.handleLike} 
                      onDontLike={this.handleDontLike} />
          </div>
          <div className="col-lg-6">
            <NewPost onAdd={this.addPost} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
