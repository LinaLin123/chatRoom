//importerat react och css
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

//en funktion som returnerar jsx
function App() {
  return (
    //jsx allt under är JSX

    // retunera en tag bara, inti tagen kan ha flera tagar.
    <div>
      <h1>ChatRoom</h1>
      {/* <MessageForm label="Enter your Message:" placeholder="Hej" /> */}
      
      <MessageForm label="Enter your Message:" placeholder="Hej"/>
      
      {/* ALT2 {MessageForm({label:"Enter message", placeholder:"hej"})} */}
     
     
      {/* Precis som att skriva {MessageForm()}*/}
      <MessageList />
    </div>
  );
}

//Exportera filen
export default App;

// props = property
