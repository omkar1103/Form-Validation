import { useState } from "react";

import "./App.css";

function App() {
  const [ufirstname, setFirstname] = useState("");
  const [ulastname, setLastname] = useState("");
  const [uemail, setEmail] = useState("");
  const [umobile, setMobile] = useState(0);
  const [ugender, setGender] = useState("male");
  const [uresume, setResume] = useState([]);
  const [selectoption, setSelectedoption] = useState("");
  const [uurl, setUrl] = useState("");
  const [uabout, setAbout] = useState("");

  //  const [] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      ufirstname,
      ulastname,
      uemail,
      umobile,
      ugender,
      uresume,
      selectoption,
      uurl,
      uabout,
      alert("form submitted successfully"),
      resetForm()
    );
  };

  const resetForm = (e) => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMobile(0);
    setGender("male");
    setResume([]);
    setUrl("");
    setAbout("");
  };
  return (
    <div className="App">
      <h1>Form in React JS</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={ufirstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="First Name"
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={ulastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="Enter Last Name"
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={uemail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            required
          />
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            id="mobile"
            value={umobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            placeholder="Enter Contact"
            required
          />
          <label>Gender*</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={ugender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={ugender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={ugender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Other
          <label>Upload Resume</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              setResume(e.target.files[0]);
            }}
            placeholder="Drop Your Resume"
            required
          />
          <label>Choose Course</label>
          <select
            name="selct"
            id="select"
            value={selectoption}
            onChange={(e) => {
              setSelectedoption(e.target.value);
            }}
          >
            <option value="" disabled defaultValue={selectoption === ""}>
              Select Your Course
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Bootstrap</option>
              <option value="4">Java</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="5">Springboot</option>
              <option value="6">ReactJS</option>
              <option value="7">MySql</option>
            </optgroup>
          </select>
          <label>LinkedIn Url</label>
          <input
            type="url"
            name="url"
            id="url"
            value={uurl}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="Enter LinkedIn Url"
            required
          />
          <label>About Yourself</label>
          <textarea
            type="text"
            cols="30"
            rows="10"
            name="about"
            id="about"
            value={uabout}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="Enter about Yourself"
            required
          />
          <label>Submit or Reset</label>
          <button type="submit">Submit</button>
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;