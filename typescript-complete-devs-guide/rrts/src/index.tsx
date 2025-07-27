/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Packages
// Context / Stores / Routers
import { reducers } from './reducers';
// Components / Classes / Controllers / Services
import { App } from './components/App';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const store = createStore(reducers, applyMiddleware(thunk));

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
   <Provider store={store}>
      <App />
   </Provider>,
);
