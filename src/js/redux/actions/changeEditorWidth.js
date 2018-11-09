import { CHANGE_EDITOR_WIDTH } from './types';

export default function changeEditorWidth(width) {
  return {
    type: CHANGE_EDITOR_WIDTH,
    width: width
  };
}