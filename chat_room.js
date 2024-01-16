const firebaseConfig = {
  apiKey: "AIzaSyCEjFIqwI5xdXzKqikeKfQjdMMRX4cp7OA",
  authDomain: "kwitter-parte-1.firebaseapp.com",
  databaseURL: "https://kwitter-parte-1-default-rtdb.firebaseio.com",
  projectId: "kwitter-parte-1",
  storageBucket: "kwitter-parte-1.appspot.com",
  messagingSenderId: "1016752520188",
  appId: "1:1016752520188:web:2df5ce9dd948d995ff1079"
};


const app = initializeApp(firebaseConfig);

  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData()
{
    firebase.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
                                   Room_names = childKey;
                                   console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;});
    });
}

getData()

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}