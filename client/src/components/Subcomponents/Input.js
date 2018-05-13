import React, { Component, Fragment } from 'react';

class Input extends Component {
  render() {
    return (
      <Fragment>
        <h5>{this.props.label}</h5>
        <input
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          url={this.props.url}
          onChange={this.props.onChange}
        />
      </Fragment>
    );
  }
}

export default Input;
