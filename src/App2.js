import React, { useState } from 'react';
import './App.css';

function CustomHooksObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  };

  function logValue() {
    console.log(value);
  };

  function clearInput() {
    setValue("");
  };

  return { value, onChange, logValue, clearInput };

};

function App() {

  const {
    value: username, 
    onChange: usernameOnChange, 
    logValue: usernameLogValue, 
    clearInput: usernameClearInput,
  } = CustomHooksObjectFormat("");

  const {
    value: email, 
    onChange: emailOnChange, 
    logValue: emailLogValue, 
    clearInput: emailClearInput,
  } = CustomHooksObjectFormat("");

  const {
    value: password, 
    onChange: passwordOnChange, 
    logValue: passwordLogValue, 
    clearInput: passwordClearInput,
  } = CustomHooksObjectFormat("");

  function handleOnSubmit(e) {
    e.preventDefault();
  
    usernameLogValue();
    usernameClearInput();

    emailLogValue();
    emailClearInput();

    passwordLogValue();
    passwordClearInput();
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={usernameOnChange}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={emailOnChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordOnChange}
        />
        <br />
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
