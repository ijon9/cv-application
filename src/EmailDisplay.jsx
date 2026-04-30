import { useState } from 'react'
// import './App.css'

function EmailDisplay() {
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
            <button >Submit</button>
        </div>
        </>
    )
}
// npm run dev
export default EmailDisplay