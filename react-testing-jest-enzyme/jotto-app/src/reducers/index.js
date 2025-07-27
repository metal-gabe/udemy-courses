/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React

// Packages
import { combineReducers } from 'redux';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import success from './successReducer';

// Styles

/* -------------------------------------------------------------------------- */
/* EXPORT OF THE FULL OBJECT CONTAINING ALL POSSIBLE REDUCERS */
/* -------------------------------------------------------------------------- */
export default combineReducers({
  guessedWords,
  secretWord,
  success,
});
