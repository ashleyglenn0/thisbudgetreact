import React, { useState } from "react";
import FormInput from "../../components/form/formInput";
import "./login.css";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState({
    username: "",
    password: "",
  });
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username is incorrect!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMessage: "Password is incorrect!",
        required: true
      }
  ];

  const onChange = (event) => {
    setLoggedInUser({...loggedInUser, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loggedInUser); 
  };
  
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Welcome back!</h1>
        <h2>Please sign in to access your account</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            loggedInUser={loggedInUser[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
