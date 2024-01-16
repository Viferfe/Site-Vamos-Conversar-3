
const firebaseConfig = {
  apiKey: "AIzaSyCEjFIqwI5xdXzKqikeKfQjdMMRX4cp7OA",
  authDomain: "kwitter-parte-1.firebaseapp.com",
  databaseURL: "https://kwitter-parte-1-default-rtdb.firebaseio.com",
  projectId: "kwitter-parte-1",
  storageBucket: "kwitter-parte-1.appspot.com",
  messagingSenderId: "1016752520188",
  appId: "1:1016752520188:web:2df5ce9dd948d995ff1079"
};

const app = firebase.initializeApp(firebaseConfig);



function addUser() {

  user_name = document.getElementById("user_name").value;
  
  localStorage.setItem("user_name", user_name);
  
    window.location = "chat_room.html";
    firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
    });
}



