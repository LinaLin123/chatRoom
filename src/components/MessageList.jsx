import React from 'react'
import MessageItem from './MessageItem'

export default function MessageList({messages}) {
    console.log(messages) // får en object med flera object i message
    console.log(Object.entries(messages)) // får array av object om man använder entries
    
    const messageArray = Object.entries(messages)


    //map hur det fungerar. tar varje object och lägger till saker. Skillnad med forEach?
    // const myArray= ['Elin', 'Amin', 'Ana', 'Andreas']
    // console.log(myArray)
    // const newArray = myArray.map(item => {
    //     return item + "1"
    // })
    // console.log(newArray)
    

    return (
      <ul className="list-group">
{messageArray.map(item=> {
    console.log(item)
    const key = item[0]
    const messageData = item[1]
    const message= messageData.message
    return <MessageItem key= {key} message={message} />

    //alt två return <MessageItem key{item[0]} message={item[1].message} />

})}
        
      </ul>
    );
  }