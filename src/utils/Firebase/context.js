import React from 'react';

export const FirebaseContext = React.createContext(null);

export const wrapperFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);