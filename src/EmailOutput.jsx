import { useState } from 'react'
// import './App.css'

function EmailOutput({ info }) {
    const divStyle = {
        // height: "100px",
        // border: "1px solid black",
        padding: "15px",
        // textAlign: "center",
        backgroundColor: "rgb(43, 79, 255)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"

    }

    const nameStyle = {
        fontSize: "35px"
    }

    const emailStyle = {
        fontSize: "20px",
    }

    return (
        <>
            <div style={divStyle}>
                <div style={nameStyle}> 
                    {info.name}
                </div>
                <div style={emailStyle}>
                    {info.email}
                </div>
                <div style={emailStyle}>
                    {info.phone}
                </div>
            </div>
        </>
    )
}
// npm run dev
export default EmailOutput

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