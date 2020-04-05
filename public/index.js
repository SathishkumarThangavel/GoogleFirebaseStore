            // Initialize Cloud Firestore through Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAMqBMPDaDMj_rMOiIwdATzxHCpuwDhpGY",
//     authDomain: "fir-64c8a.firebaseapp.com",
//     databaseURL: "https://fir-64c8a.firebaseio.com",
//     projectId: "fir-64c8a",
//     storageBucket: "fir-64c8a.appspot.com",
//     messagingSenderId: "621881348546",
//     appId: "1:621881348546:web:638b70bf6a9a3f1c25865b"
// };
// firebase.initializeApp({
//     apiKey: firebaseConfig.apiKey,
//     authDomain: firebaseConfig.authDomain,
//     projectId: firebaseConfig.projectId
// });

var db = firebase.firestore();

//  Add Data
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// // Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// Read Data
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});