import { combineReducers } from "redux";
import inputReducer from './inputReducer';
import editorWidthReducer from './editorWidthReducer';

export default combineReducers({
  input: inputReducer,
  editorWidth: editorWidthReducer
});