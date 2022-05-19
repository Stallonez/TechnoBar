import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// export const rerenderEntireTree = (state) => {
//   ReactDOM.render(
//       <React.StrictMode>
//           <App state={state}
//               addFeedback={store.addFeedback.bind(store)}
//               updateNewFeedbackText={store.updateNewFeedbackText.bind(store)} />
//       </React.StrictMode>,
//       document.getElementById('root')
//   );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
// export const rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state}
//         addFeedback={store.addFeedback.bind(store)}
//         updateNewFeedbackText={store.updateNewFeedbackText.bind(store)} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);


const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  )
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
