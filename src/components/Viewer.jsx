export function Viewer({
  profile,
  contact,
  isVisible,
  companies,
  educations,
  languages,
  expertise,
}) {
  return (
    <div className="viewer" style={{ display: isVisible ? "block" : "none" }}>
     <div className="CvContainer"> <div className="sideViewerContent">
   
   <Contact contact={contact}></Contact>
   <Educations educations={educations} />
   <SmallValueList name="Expertise" values={expertise}></SmallValueList>
   <SmallValueList name="Languages" values={languages}></SmallValueList>
   </div>
     
      <div className="mainViewerContent">
        <Profile profile={profile}></Profile>
        <Companies companies={companies}></Companies>
      </div>
     </div>
    
  
    </div>
  );
}

function Profile({ profile }) {
  return (
    <div className="profile">
      <ul>
        <h1>{profile.firstName+" "+profile.lastName}</h1>
        <div className="profileTitle">{profile.jobTitle}</div>
        <li> Profile: {profile.description}</li>

    
      </ul>
    </div>
  );
}

function Contact({ contact }) {
  return (
    <div className="contact">
      <ul>
        <li>Email: {contact.email}</li>
        <li>Telephone: {contact.tel}</li>
        <li>Website: {contact.website}</li>
        <li>Address: {contact.address}</li>
      </ul>
    </div>
  );
}

function Education({ education }) {
  return (
    <div className="company">
      <h3>{education.name}</h3>
      <ul>
        <li>Institute: {education.institute}</li>
        <li>From: {education.from}</li>
        <li>To: {education.to}</li>
      </ul>
    </div>
  );
}

function Educations({ educations }) {
  const companyList = educations.map((e) => (
    <Education education={e}></Education>
  ));

  return (
    <>
      <h2>Educations</h2>
      {companyList}
    </>
  );
}

function Company({ company }) {
  return (
    <div className="company">
      <h3>{company.name}</h3>
      <ul>
        <li>Title: {company.title}</li>
        <li>From: {company.from}</li>
        <li>To: {company.to}</li>
        <ul className="taskList">
          {company.tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

function Companies({ companies }) {
  const companyList = companies.map((c) => <Company company={c}></Company>);

  return (
    <>
      <h2>Working Experience</h2>
      {companyList}
    </>
  );
}

function SmallValueList({ name, values }) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {values.map((val) => (
          <li key={val.id}> {val.name}</li>
        ))}
      </ul>
    </>
  );
}
