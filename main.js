(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA3yx-IwJZFpsHUsuOtR5YqyDUBXwPjUHw",
        authDomain: "namepicker-e9d96.firebaseapp.com",
        databaseURL: "https://namepicker-e9d96.firebaseio.com",
        projectId: "namepicker-e9d96",
        storageBucket: "",
        messagingSenderId: "376236955520"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    const preObject = document.getElementById('object');
    const dbRefObject = firebase.database().ref().child('object');
    dbRefObject.on('value', snap => console.log(snap.val()));
}());