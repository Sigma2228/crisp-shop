import { useState } from "react";
import "./Registration.css";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [wrongName, setWrongName] = useState(false);
  const [wrongSurname, setWrongSurname] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPasword, setWrongPasword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setWrongName(false);
    setWrongSurname(false);
    setWrongEmail(false);
    setWrongPasword(false);

    if (pasword !== passwordConfirm) {
      setWrongPasword(true);
      return;
    }

    if (pasword.length < 6) {
      setWrongPasword(true);
      return;
    }

    if (!name) {
      setWrongName(true);
      return;
    }

    if (!lastName) {
      setWrongSurname(true);
      return;
    }

    if (!email.includes("@")) {
      setWrongEmail(true);
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <p>
          успішно створено акаунт
          <br />
          Імя: {name}
          <br />
          Пароль: {pasword}
          <br />
          Електронна пошта: {email}
        </p>
      </>
    );
  }

  return (
    <>
      <h1>Create New Customer Account</h1>

      <form onSubmit={handleSubmit}>
        <h2>Personal information</h2>

        <div className="form-wrap">
          <div className="input-wrap">
            <span>First name</span>
            <input
              placeholder="First name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {wrongName && (
            <p style={{ color: "red" }}>
              неправильне ім'я
            </p>
          )}

          <div className="input-wrap">
            <span>Last Name</span>
            <input
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {wrongSurname && (
            <p style={{ color: "red" }}>
              неправильне прізвище
            </p>
          )}

          <h2>Sign up for newsletter</h2>

          <div className="input-wrap">
            <span>Email</span>
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {wrongEmail && (
            <p style={{ color: "red" }}>
              неправильна пошта
            </p>
          )}

          <div className="input-wrap">
            <span>Password</span>
            <input
              placeholder="Password"
              type="password"
              value={pasword}
              onChange={(e) => setPasword(e.target.value)}
            />
          </div>

          <div className="input-wrap">
            <span>Confirm Password</span>
            <input
              placeholder="Confirm password"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          {wrongPasword && (
            <p style={{ color: "red" }}>
              пароль неправильний
            </p>
          )}

          <button type="submit">
            Create an account
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;