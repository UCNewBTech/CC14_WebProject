  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyB4VYzbh_lt5V5ntUDdL1KV9g7A-PmauMw",
    authDomain: "library-system-383e2.firebaseapp.com",
    databaseURL: "https://library-system-383e2.firebaseio.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();