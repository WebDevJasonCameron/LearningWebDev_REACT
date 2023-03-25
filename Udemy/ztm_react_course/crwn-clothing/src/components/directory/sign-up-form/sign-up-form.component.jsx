// LIBs
import { async } from "@firebase/util";
import { useState } from "react"

// COMPs
import FormInput from "../../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

// STYLEs
import './sign-up-form.styles.scss'

// OBJs
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


// COMP
const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword){
      alert("Passwords do not match");
      return;
    };

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
      );

        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();

    } catch(error){

      if(error.code === 'auth/email-already-in-use'){
        alert("Cannot crete user, email already in use")
      } else {
        console.log("User creation encountered an error", error)
      }
    }
  }

  let handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value})
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name" 
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName}/>

        <FormInput 
          label="Email" 
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email}/>

        <FormInput 
          label="Password" 
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password}/>

        <FormInput 
          label="Confirm Password"  
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}/>

        <button type="submit">Sign Up</button>
      </form>
    </div>

  )
}

export default SignUpForm