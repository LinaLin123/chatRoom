//importerat react och css
import React from "react";
import "./App.css";

// function SendButton() {
// return (
//   <button>Send</button>
// )
// }

//descrotion
function SendButton(props) {
  const { label } = props; // const eftersom man inte vill ändra på props
  return <button>{label}</button>;
}

//compenter kan skapas i samma fil

// //props är object
// function MessageForm(props) {
//   // console.log(props) {key}
//   // MessageForm skickas till function App
//   //vi väljer att ta label på den
//   return (
//     <div>
//       <label>{props.label}</label>
//       <input type="text" />
//     </div>
//   );
// }

//lättare att navigera om man använder keys istället för props.
function MessageForm({ label, placeholder }) {
  // console.log(props) {key}
  // MessageForm skickas till function App
  //vi väljer att ta label på den
  //om det är mkt props använd då const { label, placeholder } = props

  //mer information om deconstructing finns i developer.mozilla

  //ger samma resultat, den const {label} är senare.
  // const label= props.label
  // const {label} = props // plockar ut alla från props

  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
      <SendButton label="Send" />
    </div>
  );
}

function MessageItem({message}) {
  return (
  <p>{message}</p>
  )
}

// fösta gången men man vill koppla ihop messageitem inne i messageList
// function MessageList() {
//   return (
//     <div>
//       <p>hej</p>
//       <p>Då</p>
//       <p>Yes</p>
//       <p>Rast</p>
//     </div>
//   );
// }

function MessageList() {
  return (
    <div>
      <MessageItem message="hej" />
      <MessageItem message="nlö" />
      <MessageItem message="ks" />
      <MessageItem message="s" />
    </div>
  );
}
//en funktion som returnerar jsx
function App() {
  return (
    //jsx allt under är JSX

    // retunera en tag bara, inti tagen kan ha flera tagar.
    <div>
      <h1>ChatRoom</h1>
      <MessageForm label="Enter your Message:" placeholder="Hej" />

      {/* Precis som att skriva {MessageForm()}*/}
      <MessageList />
    </div>
  );
}

//Exportera filen
export default App;

// props = property
