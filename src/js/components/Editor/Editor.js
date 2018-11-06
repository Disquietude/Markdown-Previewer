import React, { Component } from 'react';
import { connect } from 'react-redux';

import changeInput from '../../redux/actions/changeInput';

class Editor extends Component {
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
            value={this.props.input}
            onChange={(e) => (this.props.changeInput(e.target.value))}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input
})

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);