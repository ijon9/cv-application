import { useState } from 'react'
// import './App.css'
import Email from './Email.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'
import EmailOutput from './EmailOutput.jsx'
import EducationOutput from './EducationOutput.jsx'
import WorkOutput from './WorkOutput.jsx'

function Page() {
    const [email, setEmail] = useState({
        name: "Isaac",
        email: "isaac.jon72@gmail.com",
        phone: "917-123-1234"
    });

    const [education, setEducation] = useState({
        school: "Stony Brook University",
        major: "Computer Science",
        start: "2019-08-26",
        end: "2023-05-18"
    });

    const [work, setWork] = useState({
        company: "Google",
        position: "Software Engineer",
        responsibilities: "Coding search engine.",
        start: "2023-05-16",
        end: "2025-04-23"
    });

    const divStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5px",
    };

    const divStyle2 = {
        display: "grid",
        gridTemplateRows: "150px 150px 1fr",
        border: "1px solid black",
        // height: "500px",
        margin: "10px"
    }

    return (
        <>
        <h1 style={{textAlign: "center"}}>CV Application</h1>
        <div style={divStyle}>
            <Email onEmailChange={setEmail}/>
            <Education onEducationChange={setEducation}/>
            <Work onWorkChange={setWork}/>
        </div>
        <h1 style={{textAlign: "center"}}> Output </h1>
        <div style={divStyle2}>
            <EmailOutput info={email} />
            <EducationOutput info={education}/>
            <WorkOutput info={work} />
        </div>
        </>
    )
}
// npm run dev
export default Page
