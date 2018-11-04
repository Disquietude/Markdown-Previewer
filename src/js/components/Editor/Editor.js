import React, { Component } from 'react';

export default class Editor extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Editor">
        <div className="Editor__header">
          <h1 className="Editor__title">Editor</h1>
        </div>
        <div className="Editor__content">
          <textarea 
            className="Editor__textarea"
            id="editor"
          />
        </div>
      </div>
    );
  }
}