import { useState } from 'react'
// import './App.css'

function Work({ onWorkChange }) {
    const divStyle = {
        // height: "100px",
        // marginTop: "5px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        gridColumn: "1 / 3",
        textAlign: "center"
    } 

    return (
        <>
        <div style={divStyle}>
            <label for="companyName">Company Name:</label>
            <input id="companyName"></input><br></br>
            <label for="positionTitle">Position Title:</label>
            <input id="positionTitle" style={{marginTop: "5px"}}></input><br></br>
            <label for="responsibilities">Responsibilities:</label><br></br>
            <textarea id="responsibilities" name="resp" rows="4" cols="50"></textarea><br></br>
            <label for="start2">Start Date:</label>
            <input id="start2" type="date" style={{marginTop: "5px"}}></input><br></br>
            <label for="end2">End Date:</label>
            <input id="end2" type="date" style={{marginTop: "5px"}}></input><br></br><br></br>
            <button onClick={() => {
                onWorkChange({
                    company: document.getElementById("companyName").value,
                    position: document.getElementById("positionTitle").value,
                    responsibilities: document.getElementById("responsibilities").value,
                    start: document.getElementById("start2").value,
                    end: document.getElementById("end2").value,
                });
                document.getElementById("companyName").value = "";
                document.getElementById("positionTitle").value = "";
                document.getElementById("responsibilities").value = "";
                document.getElementById("start2").value = "";
                document.getElementById("end2").value = "";
            }}>Submit</button>
        </div>
        </>
    )
}
// npm run dev
export default Work
