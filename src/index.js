import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/forms.css';
import './assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Firebase from './utils/Firebase/firebase';
import { FirebaseContext } from './utils/Firebase/context';

import * as serviceWorker from './serviceWorker';

/**
 * Initialise dotenv configuration for the 
 * project. This will allow access to 
 * .env environment variables.
 */
require('dotenv').config();

/**
 * Entry point fr the application, provides Firebase 
 * access to encapsulated components.
 * 
 * N.B. 
 * 	Components must be wrapped as 
 * 	FirebaseContext.Consumer components. 
 */
ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
    	<App/>
  	</FirebaseContext.Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();