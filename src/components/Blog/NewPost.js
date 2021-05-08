import React, { Component } from 'react';
import Post from '../../models/Post'

class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            content: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { title, content, author } = this.state
        const post = new Post(0, title, content, author)
        this.props.onAdd(post)
        this.setState({ title: '', content: '', author: '' })
    }
    
    handleChange = event => {
        const field = event.currentTarget.id
        switch(field) {
            case 'title': this.setState({ 'title': event.target.value })
                          break
            case 'author': this.setState({ 'author': event.target.value })
                          break
            case 'content': this.setState({ 'content': event.target.value })
                          break
            default:       break
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} required placeholder="The title of your post here..." className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" onChange={this.handleChange} value={this.state.author} required placeholder="Your name or pseudo here..." className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content" onChange={this.handleChange} value={this.state.content} required className="form-control" placeholder="The content of your post here..."></textarea>
                    </div>
                    <div className="form-group pull-right">
                        <button type="submit" className="btn btn-success"><i className="fa fa-book"></i> Add post</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
 
export default NewPost;