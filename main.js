var getBtn = document.getElementById("getBtn");
var listID = document.getElementById("databaseID");

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