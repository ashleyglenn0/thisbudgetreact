import React, { useState } from "react";
import FormInput from "../../components/form/formInput";
import axios from "axios";
import './register.css'

const Register = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          label: "Full Name",
          pattern: "^[A-Za-z0-9]{3,30}$",
          required: true
        },
        {
          id: 2,
          name: "username",
          type: "text",
          placeholder: "Username",
          label: "Username",
          errorMessage: "Username must be between 3-16 characters and should not contain special characters!",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Email",
          label: "Email",
          errorMessage: "Email should be a valid email!",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          label: "Password",
          errorMessage: "Password must be between 6 and 18 characters and contain 1 letter, 1 number, and 1 special character",
          required: true
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          label: "Confirm Password",
          errorMessage: "Passwords must match!",
          pattern: user.password,
          required: true
        }
      ];
    
    
      const onChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
      };

      const onSubmit = (event) => {
        event.preventDefault();
        const registered = user;
        axios.post('http://localhost:4000/app/register', registered)
        .then(res => console.log(res.data));

        //  console.log(registered);
      };
    
      return (
        <div className="Register">
          <form onSubmit={onSubmit}>
            <h1>Please Register Here:</h1>
            {inputs.map((input) =>(
              <FormInput key={input.id} {...input} user={user[input.name]} onChange={onChange}/>
            ))}
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );

}



export default Register;