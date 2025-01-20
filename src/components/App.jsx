import { useState } from "react";
import { Editor } from "./Editor";
import { Viewer } from "./Viewer";

export function App() {
  const [viewerVisible, setViewerVisible] = useState(true);
  const [companies,setCompanies] = useState([{name:"",title:"",from:"",to:"",tasks:[{name:"example1",id:self.crypto.randomUUID()},{name:"example2",id:self.crypto.randomUUID()}],id: self.crypto.randomUUID()}])
  const [educations, setEducations] = useState([{name:"",institute:"",from:"",to:"",id: self.crypto.randomUUID()}])
  /*const [Languages,setLanguages] = useState(["English"])*/
  
  const profile = profileDict()
  const contact = contactDict()
  return (
    <main style={{ gridTemplateColumns: viewerVisible ? "1fr 1fr" : "1fr" }}>
      <Editor
      contact={contact}
      profile={profile}
        toggleCvViewer={() => setViewerVisible(!viewerVisible)}
        companies={companies}
        setCompanies={setCompanies}
        educations={educations}
        setEducations={setEducations}
      ></Editor>
      <Viewer contact={contact} profile={profile} companies={companies}  educations={educations}
 isVisible={viewerVisible}></Viewer>
    </main>
  );
}


function profileDict(){
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Dee");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  return{
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
    description,
    setDescription,
    profilePicture,
    setProfilePicture
  }
}

function contactDict() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");

  return{
    email,
    setEmail,
    tel,
    setTel,
    website,
    setWebsite,
    address,
    setAddress
  }
}



function companyDict(){
  const [name, setName] = useState("example");
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tasks,setTasks] = useState(["example task"])

  const handleNameChange = event => setName(event.target.value)

  return (
    {
      name,
      setName,
      handleNameChange,
      title,
      setTitle,
      from,
      setFrom,
      to,
      setTo,
      tasks,
      setTasks
    }
  )
}
