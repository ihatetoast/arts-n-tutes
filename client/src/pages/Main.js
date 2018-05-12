import React, { Component, Fragment } from 'react';
import Form from '../components/Form';

import dummyData from '../dummyData.json';

class Main extends Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);
    this.showData = this.showData.bind(this);
    this.state = {
      articles: []
    };
  }
  loadData = () => {
    const articlesData = dummyData;
    this.setState({
      articles: articlesData
    });
  };
  showData = () => {
    console.log(this.state.articles);
    console.log('showdata');
  };

  render() {
    return (
      <Fragment>
        <h2>Articles</h2>
        <div className="formDiv">
          <Form />
        </div>
        <button onClick={this.loadData}>Load Articles</button>
        <div className="articlesDiv">
          {Object.keys(this.state.articles).map(key => (
            <div key={key}>
              <h3 className="title">{this.state.articles[key].title}</h3>
              <h4 className="author">by {this.state.articles[key].author}</h4>
              <p className="body">{this.state.articles[key].body}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Main;
