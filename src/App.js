//importerat react och css
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

//statisk object som efterliknar api 
const chatRoomData = {
  name: "The Local Lounge",
  message: {
    'dadada1':{
      'message': 'Hej 1'
    },
    'dadada2':{
      'message': 'Hej 2'
    },
    'dadada3':{
      'message': 'Hej 3'
    },
    'dadada4':{
      'message': 'Hej 4'
    },
    'dadada5':{
      'message': 'Hej 5'
    },
    'dadada6':{
      'message': 'Hej 6'
    }
  }
}

//en funktion som returnerar jsx
function App() {
  return (
    //jsx allt under är JSX

    // retunera en tag bara, inti tagen kan ha flera tagar.
    <div className='container'>
     

      {/* <h1>ChatRoom </h1> */}
      <h1> {chatRoomData.name}</h1>

      {/* <MessageForm label="Enter your Message:" placeholder="Hej" /> */}
      
      {/* <MessageForm label="Enter your Message:" placeholder="Hej"/> */}
      
      {/* ALT2 {MessageForm({label:"Enter message", placeholder:"hej"})} */}
     
     
      {/* Precis som att skriva {MessageForm()}*/}
      {/* <MessageList /> */}
      <div className="row">
       
        <div className="col-md-12">
        <MessageForm label="Enter your Message:" placeholder="Hej"/>

        </div></div>
        <div className="row">
<div className="col-md-12">
      <MessageList messages= {chatRoomData.message}/>

</div>
      </div>
    </div>
  );
}

//Exportera filen
export default App;

// props = property
