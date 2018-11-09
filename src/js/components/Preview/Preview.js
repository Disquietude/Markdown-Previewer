import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const Preview = (props) => (
  <div className="Preview" style={{width: props.width}}>
    <div className="Preview__header">
      <h1 className="Preview__title">Preview</h1>
    </div>
    <div 
      className="Preview__content"
      id="preview"
      dangerouslySetInnerHTML={
        {__html: marked(props.input, {breaks: true})}
      } 
    >
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  input: state.input,
  width: window.outerWidth - (state.editorWidth + 5)
})

export default connect(mapStateToProps)(Preview);