//importerat react och css
import React from "react";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

//statisk object som efterliknar api 
// const chatRoomData = {
//   name: "The Local Lounge",
//   message: {
//     'dadada1':{
//       'message': 'Hej 1'
//     },
//     'dadada2':{
//       'message': 'Hej 2'
//     },
//     'dadada3':{
//       'message': 'Hej 3'
//     },
//     'dadada4':{
//       'message': 'Hej 4'
//     },
//     'dadada5':{
//       'message': 'Hej 5'
//     },
//     'dadada6':{
//       'message': 'Hej 6'
//     }
//   }
// }

//en funktion som returnerar jsx
function App() {

  const [counter, setCounter] = useState(0) //default värde 0
  console.log(useState(1))

  const [chatRoomData, setChatRoomData] = useState ({}) // ({}) tomt object 

  function handleGetChatRoom() {
    console.log('1')
    const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
    fetch(url)
   .then((response)=>{
    console.log("2") //omvandlar till json. fetch är promise, jag lovar, men det tar tid. 
     return response.json()
    
   }).then(data => {
     console.log("4") //tar hand om promise
     console.log(data)
     setChatRoomData(data)
   })
   console.log('3') //1,3 sedan 2, 4
  }
  //funkar i console men renderar inte , därför ska man använda useState
  // let counter = 0;

  // function handelOnClick() {
  //   counter= counter + 1
  //   console.log(counter)
  // }


  // useEffect(() => {
  //   console.log('1')
  //   const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
  //   fetch(url)
  //  .then((response)=>{
  //   console.log('2')
  //    console.log(response)
  //  })
  //  console.log('3') 
  // }, [])

//göra om till json
  useEffect(() => {
    handleGetChatRoom() //kan använda den flera gånger, därför tog den till egen funktion
  }, [])


  // useEffect(() => {
  //   //1. Det här körs när komponenten initieras(första önskan) 
    
  //   return () => { 2.return körs när komponenten försvinner från sidan (sista önskan)
  //     cleanup
  //   }
  // }, [input 3. ovan körs när dessa variabler ändras])


 function handelOnClick() {
     setCounter(counter + 1)
  }

  //useEffect 

  return (
    //jsx allt under är JSX

    // retunera en tag bara, inti tagen kan ha flera tagar.
    <div className='container'>
     

      {/* <h1>ChatRoom </h1> */}
      <h1 onClick={handelOnClick}> {chatRoomData.name} - {counter}</h1>

      {/* <MessageForm label="Enter your Message:" placeholder="Hej" /> */}
      
      {/* <MessageForm label="Enter your Message:" placeholder="Hej"/> */}
      
      {/* ALT2 {MessageForm({label:"Enter message", placeholder:"hej"})} */}
     
     
      {/* Precis som att skriva {MessageForm()}*/}
      {/* <MessageList /> */}
      <div className="row">
       
        <div className="col-md-12">
        <MessageForm handleOnSucess= {handleGetChatRoom} label="Enter your Message:" placeholder="Skriv"/>

        </div></div>
        <div className="row">
<div className="col-md-12">
  {chatRoomData.messages ? 
  <MessageList messages= {chatRoomData.messages}/> : ""
  }


      {/* <MessageList messages= {chatRoomData.message}/> */}

</div>
      </div>
    </div>
  );
}

//Exportera filen
export default App;

// props = property
