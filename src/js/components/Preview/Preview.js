import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const Preview = (props) => (
  <div className="Preview">
    <div className="Preview__header">
      <h1 className="Preview__title">Preview</h1>
    </div>
    <div 
      className="Preview__content"
      dangerouslySetInnerHTML={
        {__html: marked(props.input)}
      } 
    >
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  input: state.input
})

export default connect(mapStateToProps)(Preview);