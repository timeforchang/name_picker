var listID = document.getElementById("databaseID");
var userName = document.getElementById("name");

function getName() {
    var id = listID.value;
    var returnName = "";
    var foundKey = 0;
    var root = firebase.database().ref(id);
    var uName = userName.value;
    root.once('value', function(snap) {
        var vals = snap.val();
        var keys = Object.keys(vals);
        var rand = Math.floor(Math.random() * keys.length);
        console.log(vals);
        for (var i = 0; i < keys.length; i++) {
            if (i == rand) {
                var k = keys[i];
                foundKey = k;
                var name = vals[k];
                // console.log(name);
                // console.log(uName);
                if (name === uName) {
                    k = keys[Math.floor(Math.random() * keys.length)];
                    foundKey = k;
                    name = vals[k];
                    returnName = name;
                    // console.log(returnName);
                    root.child(foundKey).remove();
                } else {
                    returnName = name;
                    // console.log(returnName);
                    root.child(foundKey).remove();
                }
            }
        }
        document.getElementById("returnedName").innerHTML = returnName;
    });
}

function makeList() {
    //repopulate
    var names = ['Justin', 'Andrew', 'Allen', 'Frank', 'Yu Hong', 'Shannon', 'Vivian'];
    var firebaseRef = firebase.database().ref();
    var newID = firebaseRef.push();
    document.getElementById("listID").innerHTML = "Your new list's ID is: " + newID.key;
    for (var i = 0; i < names.length; i++) {
        firebaseRef.child(newID.key).push(names[i]);
    }
    console.log(newID.key);
}

function signIn() {
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
    });
    console.log("logged in");
    document.getElementById("mainDiv").style.display = "block";
    document.getElementById("signOut").style.display = "block";
    document.getElementById("addDiv").style.display = "block";
    document.getElementById("signIn").style.display = "none";
    document.getElementById("welcome").style.display = "none";
}

function signOut() {
    firebase.auth().signOut();
    // Sign-out successful.
    document.getElementById("mainDiv").style.display = "none";
    document.getElementById("signOut").style.display = "none";
    document.getElementById("addDiv").style.display = "none";
    document.getElementById("signIn").style.display = "block";
    document.getElementById("welcome").style.display = "block";
}