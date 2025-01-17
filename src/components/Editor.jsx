import { use } from "react";
import { useState } from "react";

export function Editor({ name, onChange, toggleCvViewer }) {
  const [editorIndex, setEditorIndex] = useState(0);
  let editorPage;

  switch (editorIndex) {
    case 0:
      editorPage = <Profile />;
      break;
    case 1:
      editorPage = <Contact />;
      break;
    case 2:
      editorPage = <WorkExperience />;
      break;
    case 3:
      editorPage = <Education />;
      break;
    case 4:
      editorPage = <Expertise />;
      break;
    case 5:
      editorPage = <Languages />;
      break;
  }

  return (
    <div className="editor">
      {editorIndex >= 1 && (
        <button onClick={() => setEditorIndex(editorIndex - 1)}>Prev</button>
      )}
      {editorIndex <= 4 && (
        <button onClick={() => setEditorIndex(editorIndex + 1)}>Next</button>
      )}
      <hr />

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={onChange}
      />
      {editorPage}
      <hr />
      <button onClick={toggleCvViewer}>Toggle VC Viewer</button>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile Infos</h2>
      <label>
        First Name: <input type="text" className="firstName" />
      </label>
      <label>
        Last Name: <input type="text" className="lastName" />
      </label>
      <label>
        Job Title: <input type="text" className="jobTitle" />
      </label>
      <label>
        Your profile description: <textarea maxLength="200"></textarea>
      </label>
      <label>
        Profile picture: <input type="file" />
      </label>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Infos</h2>
      <label>
        Email: <input type="email" />
      </label>
      <label>
        Phone: <input type="tel" />
      </label>
      <label>
        Website: <input type="text" />
      </label>
      <label>
        Address: <input type="text" />
      </label>
    </div>
  );
}

function Job({ name, removeJob }) {
  const [show, setShow] = useState(false);

  return (
    <li>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <button onClick={removeJob}>Delete</button>
      <div style={{ display: show ? "block" : "none" }}>
        <h3>{name}</h3>
        <label>
          Company Name: <input type="text" />
        </label>
        <label>
          Job Title: <input type="text" />
        </label>
        <label>
          From: <input type="number" />
        </label>
        <label>
          To: <input type="number" />
        </label>
        <ul>
          Main tasks:
          <li>
            <input type="text" />
          </li>
        </ul>
      </div>
    </li>
  );
}

function WorkExperience() {
  const [jobs, setJobs] = useState([
    { name: "example", id: self.crypto.randomUUID() },
  ]);
  const jobsList = jobs.map((job) => (
    <Job
      name={job.name}
      key={job.id}
      removeJob={() => setJobs(jobs.filter((j) => j.id != job.id))}
    />
  ));

  return (
    <div>
      <h2>Work Experience</h2>
      <ul>{jobsList}</ul>
      <button
        className="addNewJob"
        onClick={() =>
          setJobs([
            ...jobs,
            { name: "newExample", id: self.crypto.randomUUID() },
          ])
        }
      ></button>
    </div>
  );
}

function LangEl({ uuid, value, onChange, removeLang }) {
  console.log(uuid);
  return (
    <li key={uuid}>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={removeLang}></button>
    </li>
  );
}

function Languages() {
  const [languages, setLanguages] = useState([
    { lang: "English", id: self.crypto.randomUUID() },
  ]);
  const languagesList = languages.map((lang) => (
    <LangEl
      uuid={lang.id}
      value={lang.lang}
      onChange={(e) => {
        setLanguages(
          languages.map((l) => {
            return l.id == lang.id ? { lang: e.target.value, id: lang.id } : l;
          }),
        );
      }}
      removeLang={() => {
        setLanguages(languages.filter((l) => l.id != lang.id));
      }}
    />
  ));

  return (
    <div>
      <h2>Languages</h2>
      <ul>{languagesList}</ul>
      <button
        onClick={() => {
          setLanguages([
            ...languages,
            { lang: "", id: self.crypto.randomUUID() },
          ]);
        }}
      >
        Add
      </button>
    </div>
  );
}

function ExpertiseEl({ value, onChange, removeExper }) {
  return (
    <li>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={removeExper}></button>
    </li>
  );
}

function Expertise() {
  const [expertises, setExpertises] = useState([
    { value: "example", id: self.crypto.randomUUID() },
  ]);
  const expertisesList = expertises.map((exper) => {
    return (
      <ExpertiseEl
        key={exper.id}
        value={exper.value}
        onChange={(e) => {
          setExpertises(
            expertises.map((_exper) => {
              return _exper.id == exper.id
                ? { value: e.target.value, id: exper.id }
                : _exper;
            }),
          );
        }}
        removeExper={() => {
          setExpertises(expertises.filter((_exper) => _exper.id != exper.id));
        }}
      />
    );
  });

  return (
    <div>
      <h2>Expertise:</h2>
      <ul>{expertisesList}</ul>
      <button
        onClick={() => {
          setExpertises([
            ...expertises,
            { value: "", id: self.crypto.randomUUID() },
          ]);
        }}
      >
        Add
      </button>
    </div>
  );
}

function EducationEl({ name, removeEdu }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <button onClick={removeEdu}>Delete</button>

      <div style={{ display: show ? "block" : "none" }}>
        {name}
        <label>
          Name: <input type="text" />
        </label>
        <label>
          Institue: <input type="text" />
        </label>
        <label>
          From: <input type="num" />
        </label>
        <label>
          To: <input type="num" />
        </label>
      </div>
    </div>
  );
}

function Education() {
  const [educations, setEducations] = useState([
    { name: "example", id: self.crypto.randomUUID() },
  ]);
  const educationsList = educations.map((edu) => {
    return (
      <EducationEl
        key={edu.id}
        name={edu.name}
        removeEdu={() => {
          setEducations(educations.filter((_edu) => _edu.id != edu.id));
        }}
      />
    );
  });

  return (
    <>
      <h2>Education:</h2>
      <ul> {educationsList}</ul>
      <button
        className="addNewEdu"
        onClick={() =>
          setEducations([
            ...educations,
            { name: "newExample", id: self.crypto.randomUUID() },
          ])
        }
      >
        Add new Education
      </button>
    </>
  );
}

//language, expertise, education, main proifle image
