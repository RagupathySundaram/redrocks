import React from 'react';
import ReactDOM from 'react-dom';
require('file-loader?name=[name].[ext]!../index.html');



// const App = () => {
//   return (
//     <div>
//       <h1>Hello, React with Webpack!!!!!!!!!!!!ccccccccccc</h1>
//     </div>
//   )
// }

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
