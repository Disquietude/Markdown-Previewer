import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeEditorWidth from '../../redux/actions/changeEditorWidth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const Divider = () => (
//   <div className="Divider">
//     <FontAwesomeIcon icon="ellipsis-v"/>
//     <FontAwesomeIcon icon="ellipsis-v"/>
//   </div>
// );

// export default Divider;

class Divider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0
    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.resizeEditor = this.resizeEditor.bind(this);
  }

  handleMouseDown(e) {
    this.setState({
      mouseX: e.clientX
    });
    document.onmousemove = this.resizeEditor;
    document.onmouseup = this.stopResize;
  }

  resizeEditor(e) {
    e.preventDefault();
    let newWidth = this.props.editorWidth - (this.state.mouseX - e.clientX);
    if (newWidth < 0.2 * window.outerWidth) {
      newWidth = 0.2 * window.outerWidth;
    }
    else if (newWidth > 0.8 * window.outerWidth) {
      newWidth = 0.8 * window.outerWidth;
    }
    this.props.changeEditorWidth(newWidth);
    this.setState({
      mouseX: e.clientX
    });
  }

  stopResize(e) {
    document.onmousemove = null;
    document.onmouseup = null;
  }

  render() {
    return (
      <div 
        className="Divider"
        onMouseDown={(e) => this.handleMouseDown(e)}
      >
        <FontAwesomeIcon icon="ellipsis-v"/>
        <FontAwesomeIcon icon="ellipsis-v"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editorWidth: state.editorWidth
})

const mapDispatchToProps = (dispatch) => ({
  changeEditorWidth: (width) => dispatch(changeEditorWidth(width))
})

export default connect(mapStateToProps, mapDispatchToProps)(Divider);