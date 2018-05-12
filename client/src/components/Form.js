import React, { Component, Fragment } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h6 className="formLabel">Title</h6>
        <h6 className="formLabel">Author</h6>
        <h6 className="formLabel">Source</h6>
        <h6 className="formLabel">Article or tutorial</h6>
        <h6 className="formLabel">URL</h6>
        <h6 className="formLabel">Description</h6>
      </form>
    );
  }
}

export default Form;
