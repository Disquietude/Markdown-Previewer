import { CHANGE_INPUT } from './types';

export default function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input: input
  }
}