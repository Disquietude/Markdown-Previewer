import React from 'react';
import { Provider } from 'react-redux';

import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Editor />
      <Preview />
    </div>
  </Provider>
);

export default App;