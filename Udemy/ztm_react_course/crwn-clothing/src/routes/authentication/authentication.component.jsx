// LIBs
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

// COMPOs
import SignUpForm from '../../components/directory/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/directory/sign-in-form/sign-in-form.component';

// STYLEs
import './authentication.styles.scss'

// COMPO
const Authentication = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication