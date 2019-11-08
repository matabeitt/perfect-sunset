import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJ_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
    appId: process.env.REACT_APP_APP_ID
  };

const config =
	process.env.ENV === 'production' ? firebaseConfig : firebaseConfig;


class Firebase {
	constructor () {
		app.initializeApp(config);
		//this.db = app.database();
  }

  // *** WEATHER POST API *** //

	post = pid => this.db.ref(`posts/${pid}`);

	posts = () => this.db.ref(`posts/`);
}

export default Firebase;
