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
      uabout
    );
    alert("You have registered successfully!"); 
    resetForm();
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMobile(0);
    setGender("male");
    setResume([]);
    setSelectedoption("");
    setUrl("");
    setAbout("");
  };

  return (
    <div className="App">

      <h2>Registration Form</h2>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={ufirstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={ulastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <label>Contact</label>
          <input
            type="tel"
            name="contact"
            value={umobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Contact"
            required
          />
          <label>Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={ugender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={ugender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={ugender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label>Upload Resume</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <label>Choose Course</label>
          <select
            name="select"
            value={selectoption}
            onChange={(e) => setSelectedoption(e.target.value)}
            required
          >
            <option value="" disabled>
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
            value={uurl}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter LinkedIn Url"
            required
          />
          <label>About Yourself</label>
          <textarea
            name="about"
            cols="30"
            rows="10"
            value={uabout}
            onChange={(e) => setAbout(e.target.value)}
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
