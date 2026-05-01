import { useState } from 'react'
// import './App.css'

function Education({ onEducationChange }) {
    const divStyle = {
        // height: "100px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center"
    } 

    return (
        <>
        <div style={divStyle}>
            <h2>Education</h2>
            <label for="schoolName">School Name:</label>
            <input id="schoolName"></input><br></br>
            <label for="major">Major:</label>
            <input id="major" style={{marginTop: "5px"}}></input><br></br>
            <label for="start">Start Date:</label>
            <input id="start" type="date" style={{marginTop: "5px"}}></input><br></br>
            <label for="end">End Date:</label>
            <input id="end" type="date" style={{marginTop: "5px"}}></input><br></br><br></br>
            <button onClick={() => {
                onEducationChange({
                    school: document.getElementById("schoolName").value,
                    major: document.getElementById("major").value,
                    start: document.getElementById("start").value,
                    end: document.getElementById("end").value
                });
                document.getElementById("schoolName").value = "";
                document.getElementById("major").value = "";
                document.getElementById("start").value = "";
                document.getElementById("end").value = "";
            }
            }>Submit</button>
        </div>
        </>
    )
}
// npm run dev
export default Education
