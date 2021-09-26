"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCv3_QVSK6GcWBWGduvpNOXqoA7-ot2h_A",
  authDomain: "learn-firebase-f4fe0.firebaseapp.com",
  projectId: "learn-firebase-f4fe0",
  storageBucket: "learn-firebase-f4fe0.appspot.com",
  messagingSenderId: "1085902785112",
  appId: "1:1085902785112:web:4c44636f12c172fdf4582d"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);

function create(data) {
  var docRef;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)((0, _firestore.collection)(db, "users"), {
            username: data.username,
            email: data.email,
            password: data.password
          }));

        case 3:
          docRef = _context.sent;
          console.log("Document written with ID: ", docRef.id);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error adding document: ", _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}