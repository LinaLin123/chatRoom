import React from 'react'
import ButtonSend from './ButtonSend' // för att knappen ska fungera i messageForm. En annan komponent


//lättare att navigera om man använder keys istället för props.
export default function MessageForm({ label, placeholder }) {
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
        <ButtonSend label="Send" />
      </div>
    );
  }