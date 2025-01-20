import { useState } from "react";

export function Editor({
  profile,
  contact,
  companies,
  setCompanies,
  educations,
  setEducations,
  toggleCvViewer,
  languages,
  setLanguages,
  
}) {
  const [editorIndex, setEditorIndex] = useState(0);
  let editorPage;

  switch (editorIndex) {
    case 0:
      editorPage = <Profile profile={profile} />;
      break;
    case 1:
      editorPage = <Contact contact={contact} />;
      break;
    case 2:
      editorPage = (
        <LargeEditComponent
          componentTitle="Working Experiences"
          componentType="work"
          valuesDict={companies}
          setValuesDict={setCompanies}
        />
      );
      break;
    case 3:
      editorPage = (
        <LargeEditComponent
          componentTitle="Educations"
          componentType="education"
          valuesDict={educations}
          setValuesDict={setEducations}
        />
      );
      break;
    case 4:
      editorPage = <SmallEditComponent componentTitle="Experitses: " values={languages} setValues={setLanguages}/>;
      break;
    case 5:
      editorPage = <SmallEditComponent componentTitle="Languages: " values={languages} setValues={setLanguages}/>;
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

      {editorPage}
      <hr />
      <button onClick={toggleCvViewer}>Toggle VC Viewer</button>
    </div>
  );
}

function Profile({ profile }) {
  return (
    <div>
      <h2>Profile Infos</h2>
      <label>
        First Name:{" "}
        <input
          type="text"
          className="firstName"
          value={profile.firstName}
          onChange={(e) => profile.setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          type="text"
          className="lastName"
          value={profile.lastName}
          onChange={(e) => profile.setLastName(e.target.value)}
        />
      </label>
      <label>
        Job Title:{" "}
        <input
          type="text"
          className="jobTitle"
          value={profile.jobTitle}
          onChange={(e) => profile.setJobTitle(e.target.value)}
        />
      </label>
      <label>
        Your profile description:{" "}
        <textarea
          maxLength="200"
          value={profile.description}
          onChange={(e) => profile.setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        Profile picture: <input type="file" />
      </label>
    </div>
  );
}

function Contact({ contact }) {
  return (
    <div>
      <h2>Contact Infos</h2>
      <label>
        Email:{" "}
        <input
          type="email"
          value={contact.email}
          onChange={(e) => contact.setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:{" "}
        <input
          type="tel"
          value={contact.tel}
          onChange={(e) => contact.setTel(e.target.value)}
        />
      </label>
      <label>
        Website:{" "}
        <input
          type="text"
          value={contact.website}
          onChange={(e) => contact.setWebsite(e.target.value)}
        />
      </label>
      <label>
        Address:{" "}
        <input
          type="text"
          value={contact.address}
          onChange={(e) => contact.setAddress(e.target.value)}
        />
      </label>
    </div>
  );
}

function SmallComponentElement({ value, setValue, removeElement }) {
  return (
    <li key={value.uuid}>
      <input type="text" value={value.value} onChange={(e)=>setValue(e)} />
      <button onClick={removeElement}></button>
    </li>
  );
}

function SmallEditComponent({ componentTitle ,values,setValues}) {
  const valuesList = values.map((val) => (
    <SmallComponentElement
     
      value={val}
      setValue={((e)=>{setValues(
        values.map((_val) =>
          _val.id == val.id
            ? { name: e.target.value, id: self.crypto.randomUUID() }
            : _val,
        ),
      );})}
      
      removeElement={() =>
        setValues(values.filter((_val) => _val.id != val.id))
      }
    />
  ));

  return (
    <div>
      <h2>{componentTitle}</h2>
      <ul>{valuesList}</ul>
      <button
        onClick={() => {
          setValues([...values, { name: "", id: self.crypto.randomUUID() }]);
        }}
      >
        Add
      </button>
    </div>
  );
}

function LargeComponentElement({
  name,
  removeValue,
  componentType,
  values,
  setValues,
}) {
  const [show, setShow] = useState(true);

  let element;
  if (componentType == "work") {
    element = (
      <>
        {" "}
        <label>
          Company Name:{" "}
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label>
          Job Title:{" "}
          <input
            type="text"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </label>
        <label>
          From:{" "}
          <input
            type="number"
            value={values.from}
            onChange={(e) => setValues({ ...values, from: e.target.value })}
          />
        </label>
        <label>
          To:{" "}
          <input
            type="number"
            value={values.to}
            onChange={(e) => setValues({ ...values, to: e.target.value })}
          />
        </label>
        <ul>
          Main tasks:
          {values.tasks.map((task) => (
            <li key={task.id}>
              {" "}
              <input
                type="text"
                value={task.name}
                onChange={(e) =>
                  setValues({
                    ...values,
                    tasks: values.tasks.map((t) =>
                      t.id == task.id
                        ? { name: e.target.value, id: task.id }
                        : t,
                    ),
                  })
                }
              />
              <button
                onClick={() =>
                  setValues({
                    ...values,
                    tasks: values.tasks.filter((t) => t.id != task.id),
                  })
                }
              >
                X
              </button>
            </li>
          ))}
          <button
            onClick={() =>
              setValues({
                ...values,
                tasks: [
                  ...values.tasks,
                  { name: "new one", id: self.crypto.randomUUID() },
                ],
              })
            }
          >
            Add task
          </button>
        </ul>{" "}
      </>
    );
  } else if (componentType == "education") {
    element = (
      <>
        <label>
          Name:{" "}
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label>
          Institute:{" "}
          <input
            type="text"
            value={values.insitute}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label>
          From:{" "}
          <input
            type="num"
            value={values.from}
            onChange={(e) => setValues({ ...values, from: e.target.value })}
          />
        </label>
        <label>
          To:{" "}
          <input
            type="num"
            value={values.to}
            onChange={(e) => setValues({ ...values, to: e.target.value })}
          />
        </label>
      </>
    );
  }

  return (
    <li>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <button onClick={removeValue}>Delete</button>
      <div style={{ display: show ? "block" : "none" }}>
        <h3>{name}</h3>
        {element}
      </div>
    </li>
  );
}

function LargeEditComponent({
  componentTitle,
  componentType,
  valuesDict,
  setValuesDict,
}) {
  const valuesList = valuesDict.map((val) => (
    <LargeComponentElement
      componentType={componentType}
      name={val.name}
      key={val.id}
      values={val}
      setValues={(newValue) =>
        setValuesDict(
          valuesDict.map((_val) => (_val.id == val.id ? newValue : _val)),
        )
      }
      removeValue={() =>
        setValuesDict(valuesDict.filter((_val) => _val.id != val.id))
      }
    />
  ));

  return (
    <div>
      <h2>{componentTitle}</h2>
      <ul>{valuesList}</ul>
      <button
        onClick={() =>
          setValuesDict([
            ...valuesDict,
            {
              name: "",
              title: "",
              from: "",
              to: "",
              tasks: ["example1"],
              id: self.crypto.randomUUID(),
            },
          ])
        }
      >
        Add(not working!)
      </button>
    </div>
  );
}
