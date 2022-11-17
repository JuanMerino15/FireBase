/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

  const config = {
    apiKey: "AIzaSyA3_Lq6k6C6pB02CXRJT7r_p02ew1T7kas",
    authDomain: "friendlychat-29ca2.firebaseapp.com",
    projectId: "friendlychat-29ca2",
    storageBucket: "friendlychat-29ca2.appspot.com",
    messagingSenderId: "448287078983",
    appId: "1:448287078983:web:9f387414d41b159eb50f62",
    measurementId: "G-HGP1W0BMZV"
  };


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}