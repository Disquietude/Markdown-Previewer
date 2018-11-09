import React from 'react';
import { Provider } from 'react-redux';

import Editor from './Editor/Editor';
import Divider from './Divider/Divider';
import Preview from './Preview/Preview';

import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Editor />
      <Divider />
      <Preview />
    </div>
  </Provider>
);

export default App;