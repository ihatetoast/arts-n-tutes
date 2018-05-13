import React, { Component } from 'react';
import Input from './Subcomponents/Input';
import Textarea from './Subcomponents/Textarea';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      topic: '',
      url: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit = e => {
    e.preventDefault();
    const article = {
      title: this.state.title,
      author: this.state.author || 'none',
      topic: this.state.topic,
      url: this.state.url,
      description: this.state.description
    };
    console.log(article);
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          label="Title"
          type="text"
          value={this.state.title}
          placeholder="title of article or video"
          name="title"
          onChange={this.handleInputChange}
        />
        <Input
          label="Author, tutor, or class"
          type="text"
          value={this.state.author}
          placeholder="author or tutor"
          name="author"
          onChange={this.handleInputChange}
        />
        <Input
          label="Topic"
          type="text"
          value={this.state.topic}
          placeholder="topic or theme"
          name="topic"
          onChange={this.handleInputChange}
        />
        <Input
          label="URL"
          type="text"
          value={this.state.url}
          placeholder="https://..."
          name="url"
          onChange={this.handleInputChange}
        />
        <Textarea
          type="text"
          value={this.state.description}
          placeholder="brief description"
          rows="10"
          cols="50"
          name="description"
          onChange={this.handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
