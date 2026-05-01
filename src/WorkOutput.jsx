import { useState } from 'react'
// import './App.css'

function WorkOutput({ info }) {
    const divStyle = {
        padding: "15px",
    } 

    const title = {
        fontSize: "25px",
        fontWeight: "bold",
    }

    const header = {
        display: "flex",
        fontSize: "20px",
        justifyContent: "space-between"
    }

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function formatDate(date) {
        if(date === "") return;
        const d = date.split("-");
        return months[+d[1]-1] + ' ' + +d[2] + ', ' + +d[0];
    }

    return (
        <>
            <div style={divStyle}>
                <div style={title}>Work Experience</div><br></br>
                <div id="educationHeader" style={header}>
                    <div> {info.position} at {info.company}</div>
                    <div>{formatDate(info.start)} {info.start === '' && info.end === '' ? "" : "-"} {formatDate(info.end)}</div>
                </div>
                <hr />
                <div id="responsibilities" style={{fontSize: "20px"}}>
                    {info.responsibilities}
                </div>
            </div>
        </>
    )
}
// npm run dev
export default WorkOutput
