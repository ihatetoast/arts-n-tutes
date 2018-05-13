import React, { Component, Fragment } from 'react';

class Textarea extends Component {
  render() {
    return (
      <Fragment>
        <h5>{this.props.label}</h5>
        <textarea
          type={this.props.type}
          value={this.props.value}
          cols={this.props.cols}
          rows={this.props.rows}
          placeholder={this.props.placeholder}
          name={this.props.name}
          url={this.props.url}
          onChange={this.props.onChange}
        />
      </Fragment>
    );
  }
}

export default Textarea;
