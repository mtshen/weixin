import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './public/registerServiceWorker';
import './index.less';

ReactDOM.render(
  <App />,
  document.body as HTMLElement
);
registerServiceWorker();
