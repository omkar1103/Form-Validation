import { useState } from "react";
import "./App.css";

function App() {
  const [uname, setName] = useState("");              // New State for Name
  const [uemail, setEmail] = useState("");
  const [upassword, setPassword] = useState("");
  const [uconfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password confirmation validation
    if (upassword !== uconfirmPassword) {
      alert("Passwords do not match! Please try again.");
      return;
    }

    console.log("Name:", uname);
    console.log("Email:", uemail);
    console.log("Password:", upassword);

    alert("Account created successfully!");
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Full Name"
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

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={upassword}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={uconfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <button type="submit">Create Account</button>
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
