// 1. importera react 

import React from 'react'

//alt 1, react sätt
function ButtonSend(props) {
    const { label } = props; // const eftersom man inte vill ändra på props
    return <button>{label}</button>;
  }

  export default ButtonSend;

//   //Alt två de som kodat python 
//  export default funtion ButtonSend(props) {
// //     const { label } = props; // const eftersom man inte vill ändra på props
// //     return <button>{label}</button>;
// //   }

// //alt tre arrow function många föredrar 
// const Button = () => {

// }

// export default ButtonSend