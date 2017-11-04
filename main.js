var getBtn = document.getElementById("getBtn");
var listID = document.getElementById("databaseID");
var provider = new firebase.auth.GoogleAuthProvider();

function getName() {
    var id = listID.value;
    var root = firebase.database().ref(id);
    root.on('value', function(snap) {
        var vals = snap.val();
        var keys = Object.keys(vals);
        console.log(vals);
        var returnName = "";
        var rand = Math.floor(Math.random() * keys.length);
        for (var i = 0; i < keys.length; i++) {
            if (i == rand) {
                var k = keys[i];
                var name = vals[k];
                returnName = name;
            }
        }
        document.getElementById("returnedName").innerHTML = returnName;
    });
}

function makeList() {
    var id = listID.value;
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("New Branch").set("Hello");
}

function signIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        document.getElementById("mainDiv").style.display = "block";
        document.getElementById("signOut").style.display = "block";
        document.getElementById("signIn").style.display = "none";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.getElementById("mainDiv").style.display = "none";
        document.getElementById("signOut").style.display = "none";
        document.getElementById("signIn").style.display = "block";
    }).catch(function(error) {
        // An error happened.
    });
}