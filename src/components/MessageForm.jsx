import React from 'react'
import ButtonSend from './ButtonSend' // för att knappen ska fungera i messageForm. En annan komponent
import { useRef } from 'react';

//lättare att navigera om man använder keys istället för props.
export default function MessageForm({ label, placeholder, handleOnSucess }) {

    const messageInputField = useRef()
    // console.log(props) {key}
    // MessageForm skickas till function App
    //vi väljer att ta label på den
    //om det är mkt props använd då const { label, placeholder } = props
  
    //mer information om deconstructing finns i developer.mozilla
  
    //ger samma resultat, den const {label} är senare.
    // const label= props.label
    // const {label} = props // plockar ut alla från props

    //funktionen för att klicka på knappen ska fungera. 
    function handleOnClick() {
        // console.log("Användare har klickat på knappen");
        // console.log("Hämta det användaren har skrivit in i input fältet");
        // // console.log(messageInputField) // får all info, gå då ner till value som ger vad man har skrivit i input
        // console.log(messageInputField.current.value) // får värde i input 

        //nu vill vi skicka data till backend 
        const message = messageInputField.current.value

        //skickar data till 
        const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
        const data = {
            message:message // skickar data från input
        }
        fetch(url, {
            method: 'POST', //skapa data
            body: JSON.stringify(data) // skicka dataobjekt som sträng
        }).then((response)=> {
            console.log("Data har skickat") //data har skickat nu till api et
            handleOnSucess()
            messageInputField.current.value = ""

        })


        // HTTP STATUS CODE 200 är bra 
        //Get: hämta data, post skapa data, put förändra hela objektet, delete ta bort objektet, patch förändra  del av objekt 
    }
  
    //* 1. Skriv funktionen som ska anropas
    
    return (
      <div className="form-group">
        <label>{label}</label>
        <input ref= {messageInputField} type="text" className="form-control" placeholder={placeholder} />
        {/* *2 skickar ner funktion som prop */}
        <ButtonSend handleOnClick={handleOnClick} label="Send" />
      </div>
    );
  }