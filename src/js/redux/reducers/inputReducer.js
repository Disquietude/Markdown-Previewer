import { CHANGE_INPUT } from '../actions/types';

const initialState = `
  # Markdown Previewer
  Type Markdown into the 'Editor' to see it rendered in the 'Preview'.

  ## Markdown Sample
  Excerpts taken from Kyle Simpson's [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS).

  > Any sufficiently *advanced* technology is indistinguishable from magic. -- Arthur C. Clarke

  1. **Tokenizing/Lexing:** breaking up a string of characters into meaningful (to the language) chunks, called tokens. For instance, consider the program: \`var a = 2;\`. This program would likely be broken up into the following tokens: \`var\`, \`a\`, \`=\`, \`2\`, and \`;\`. Whitespace may or may not be persisted as a token, depending on whether it's meaningful or not.

  \`\`\`javascript
  function foo(a) {
          console.log( a ); // 2
  }

  foo( 2 );
  \`\`\`

  ![lexical scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/fig1.png?raw=true)

`;

let inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT:
      return action.input;
    default:
      return state;
  }
}

export default inputReducer;