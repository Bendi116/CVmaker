import { useState } from "react";
import { Editor } from "./Editor";
import { Viewer } from "./Viewer";

export function App() {
  const [viewerVisible, setViewerVisible] = useState(true);
  const [companies, setCompanies] = useState([
    {
      name: "",
      title: "",
      from: "",
      to: "",
      tasks: [
        { name: "example1", id: self.crypto.randomUUID() },
        { name: "example2", id: self.crypto.randomUUID() },
      ],
      id: self.crypto.randomUUID(),
    },
  ]);
  const [educations, setEducations] = useState([
    { name: "", institute: "", from: "", to: "", id: self.crypto.randomUUID() },
  ]);
  const [languages, setLanguages] = useState([
    { name: "English", id: self.crypto.randomUUID() },
  ]);
  const [expertise, setExpertise] = useState([
    { name: "Communication", id: self.crypto.randomUUID() },
  ]);

  const profile = profileDict();
  const contact = contactDict();
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
        languages={languages}
        setLanguages={setLanguages}
        expertise={expertise}
        setExpertise={setExpertise}
      ></Editor>
      <Viewer
        contact={contact}
        profile={profile}
        companies={companies}
        educations={educations}
        isVisible={viewerVisible}
        languages={languages}
        expertise={expertise}
      ></Viewer>
    </main>
  );
}

function profileDict() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Dee");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
    description,
    setDescription,

  };
}

function contactDict() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");

  return {
    email,
    setEmail,
    tel,
    setTel,
    website,
    setWebsite,
    address,
    setAddress,
  };
}
