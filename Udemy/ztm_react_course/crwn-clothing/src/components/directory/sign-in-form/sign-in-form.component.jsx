// LIBs
import { useState, useContext } from "react"
import { createUserDocumentFromAuth, 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword 
} from '../../../utils/firebase/firebase.utils';

// COMPs
import { UserContext } from '../../../context/user.context';
import Button from '../../button/button.component';
import FormInput from "../../form-input/form-input.component";

// STYLEs
import './sign-in-form.styles.scss'

// OBJs
const defaultFormFields = {
  email: "",
  password: "",
};


// COMP
const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const { setCurrentUser } = useContext(UserContext);
  

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();

    } catch(error){
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Email or Password');
          break
        case 'auth/user-not-found':
          alert('Incorrect Email or Password');
          break
        default:
          console.log(error)
      }
    }
  };

  let handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value})
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      

      </form>
    </div>

  )
};

export default SignInForm;