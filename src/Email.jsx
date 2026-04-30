import { useState } from 'react'
// import './App.css'

function Email({ onEmailChange }) {
    const divStyle = {
        // height: "100px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
    } 

    return (
        <>
        <div style={divStyle}>
            <label for="name">Name:</label>
            <input id="name"></input><br></br>
            <label for="email">Email:</label>
            <input id="email" style={{marginTop: "5px"}}></input><br></br>
            <label for="phone">Phone:</label>
            <input id="phone" type="tel" style={{marginTop: "5px"}}></input><br></br><br></br>
            <button onClick={() => {
                onEmailChange({
                    name : document.getElementById("name").value,
                    email : document.getElementById("email").value,
                    phone : document.getElementById("phone").value
                });
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
            }}>Submit</button>
        </div>
        </>
    )
}
// npm run dev
export default Email

// function Parent() {
//   const [data, setData] = useState(""); // Shared state

//   return (
//     <>
//       <SiblingA onDataChange={setData} /> {/* Sender */}
//       <SiblingB sharedData={data} />     {/* Receiver */}
//     </>
//   );
// }

// function SiblingA({ onDataChange }) {
//   return <button onClick={() => onDataChange("Hello from A!")}>Send</button>;
// }

// function SiblingB({ sharedData }) {
//   return <p>Message: {sharedData}</p>;
// }