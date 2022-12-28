import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChangefirstName = (event) => {
    setValues({ ...values, firstname: event.target.value });
    console.log(setValues);
  };
  const handleChangelastName = (event) => {
    setValues({ ...values, lastname: event.target.value });
    console.log(setValues);
  };
  const handleChangeemail = (event) => {
    setValues({ ...values, email: event.target.value });
    console.log(setValues);
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [valid, setValid] = useState(false);

  return (
    <div>
      <div className="judul">
        <h1 class="animate-charcter"> BASIC FORM</h1>
      </div>
      <div class="form-container">
        <form class="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Terima kasih sudah mendaftar!!</div> : null}

          <input onChange={handleChangefirstName} value={values.firstname} id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName" />
          {submitted && !values.firstname ? <span>tolong isi form firstname</span> : null}

          <input onChange={handleChangelastName} value={values.lastname} id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName" />
          {submitted && !values.lastname ? <span>tolong isi form lastname</span> : null}

          <input onChange={handleChangeemail} value={values.email} id="email" class="form-field" type="text" placeholder="Email" name="email" />
          {submitted && !values.email ? <span>tolong isi form email</span> : null}

          <button class="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
